import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

type OrderItem = {
  product_name: string;
  quantity: number;
  price: number;
};

type Order = {
  id: number;
  created_at: string;
  status: string;
  payment_status: string;
  payment_method: string;
  delivery_method: string;
  subtotal: number;
  shipping_price: number;
  total: number;
  inpost_point_name: string | null;
  inpost_point_address: string | null;
  inpost_point_city: string | null;
  inpost_point_postal_code: string | null;
  items: OrderItem[];
};

const COLORS = {
  background: [15, 17, 21] as [number, number, number],
  card: [24, 27, 34] as [number, number, number],
  border: [43, 47, 56] as [number, number, number],
  gold: [199, 155, 59] as [number, number, number],
  white: [245, 245, 245] as [number, number, number],
  gray: [184, 184, 184] as [number, number, number],
  muted: [153, 153, 153] as [number, number, number],
};

export async function exportOrdersPdf() {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/order/myOrders/export`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  if (!response.ok) { throw new Error("Nie udało się pobrać historii zamówień") }
  const data: { success: boolean; orders: Order[] } = await response.json();
  if (!data.success) { throw new Error("Nie udało się pobrać historii zamówień") }

  const doc = new jsPDF();
  const fontRegular = await fetch("/fonts/ARIAL.TTF").then((res) => {
    if (!res.ok) throw new Error("Nie udało się załadować fontu Arial");
    return res.arrayBuffer();
  });

  const fontBold = await fetch("/fonts/ARIALBD.TTF").then((res) => {
    if (!res.ok) throw new Error("Nie udało się załadować pogrubionego fontu Arial");
    return res.arrayBuffer();
  });

  const toBase64 = (buffer: ArrayBuffer) => btoa(new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte),""));

  doc.addFileToVFS("Arial.ttf", toBase64(fontRegular));
  doc.addFont("Arial.ttf", "Arial", "normal");

  doc.addFileToVFS("Arial-Bold.ttf", toBase64(fontBold));
  doc.addFont("Arial-Bold.ttf", "Arial", "bold");

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const CONTENT_LEFT = 18;
  const CONTENT_RIGHT = pageWidth - 18;
  const SUMMARY_INDENT = 4;

  function drawPageBackground() {
    doc.setFillColor(...COLORS.background);
    doc.rect(0, 0, pageWidth, pageHeight, "F");
    doc.setFillColor(...COLORS.card);
    doc.setDrawColor(...COLORS.border);
    doc.roundedRect(10, 10, pageWidth - 20, pageHeight - 20, 4, 4, "FD");
  }

  drawPageBackground();

  doc.setFont("Arial", "bold");
  doc.setFontSize(22);
  doc.setTextColor(...COLORS.gold);
  doc.text("Hej Mistrzu!", CONTENT_LEFT, 29);

  doc.setFont("Arial", "normal");
  doc.setFontSize(11);
  doc.setTextColor(...COLORS.gray);
  doc.text("Historia zamówień", CONTENT_LEFT, 38);

  doc.setFontSize(9);
  doc.setTextColor(...COLORS.muted);
  doc.text(`Wygenerowano: ${new Date().toLocaleDateString("pl-PL",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    })}`, CONTENT_LEFT, 47
  );

  let currentY = 60;
  data.orders.forEach((order) => {
    const estimatedTableHeight = order.items.length * 9 + 10;
    const estimatedOrderHeight = estimatedTableHeight + 43;

    if (currentY + estimatedOrderHeight > pageHeight - 20) {
      doc.addPage();
      drawPageBackground();
      currentY = 25;
    }

    // Separator zamówienia
    doc.setDrawColor(...COLORS.border);
    doc.setLineWidth(0.3);
    doc.line(CONTENT_LEFT, currentY - 5, CONTENT_RIGHT, currentY - 5);

    // Numer zamówienia
    doc.setFont("Arial", "bold");
    doc.setFontSize(13);
    doc.setTextColor(...COLORS.gold);
    doc.text(`Zamówienie #${order.id}`, CONTENT_LEFT, currentY);

    // Status zamówienia
    doc.setFont("Arial", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.gray);
    doc.text(`Status: ${order.status}`, CONTENT_RIGHT, currentY, {
      align: "right",
    });

    autoTable(doc, {
      startY: currentY + 6,
      head: [["Produkt", "Ilość", "Cena"]],
      body: order.items.map((item) => [
        item.product_name,
        String(item.quantity),
        `${Number(item.price).toFixed(2)} zł`,
      ]),
      margin: {
        left: CONTENT_LEFT,
        right: pageWidth - CONTENT_RIGHT,
      },
      theme: "grid",
      styles: {
        font: "Arial",
        fontStyle: "normal",
        textColor: COLORS.white,
        fillColor: COLORS.card,
        lineColor: COLORS.border,
        lineWidth: 0.2,
        cellPadding: 3,
      },

      headStyles: {
        font: "Arial",
        fontStyle: "bold",
        textColor: COLORS.gold,
        fillColor: [16, 18, 22],
        lineColor: COLORS.border,
      },

      alternateRowStyles: {
        fillColor: [20, 23, 29],
      },
    });
    currentY = (doc as any).lastAutoTable.finalY + 7;
    doc.setFont("Arial", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.gray);

    doc.text("Wartość produktów:", CONTENT_LEFT + SUMMARY_INDENT, currentY);
    doc.text(
      `${Number(order.subtotal).toFixed(2)} zł`,
      CONTENT_RIGHT - SUMMARY_INDENT,
      currentY,
      { align: "right" }
    );
    currentY += 6;

    doc.text("Koszt dostawy:", CONTENT_LEFT + SUMMARY_INDENT, currentY);
    doc.text(
      `${Number(order.shipping_price).toFixed(2)} zł`,
      CONTENT_RIGHT - SUMMARY_INDENT,
      currentY,
      { align: "right" }
    );

    currentY += 3;
    doc.setDrawColor(...COLORS.border);
    doc.line(CONTENT_LEFT, currentY, CONTENT_RIGHT, currentY);
    currentY += 7;

    doc.setFont("Arial", "bold");
    doc.setFontSize(12);
    doc.setTextColor(...COLORS.gold);

    doc.text("ŁĄCZNIE:", CONTENT_LEFT + SUMMARY_INDENT, currentY);
    doc.text(`${Number(order.total).toFixed(2)} zł`,
      CONTENT_RIGHT - SUMMARY_INDENT,
      currentY,
      { align: "right" }
    );
    currentY += 12;
  });
  doc.save(`historia-zamowien-hejmistrzu-${new Date().toISOString().split("T")[0]}.pdf`);
}