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

  doc.setFont("Arial", "normal");
  doc.setFontSize(18);
  doc.text("Historia zamówień - Gralnia", 14, 20);
  doc.setFontSize(10);
  doc.text(`Data wygenerowania: ${new Date().toLocaleDateString("pl-PL")}`, 14, 28);

  let currentY = 40;
  data.orders.forEach((order) => {
    doc.setFontSize(12);
    doc.text(`Zamówienie #${order.id}`, 14, currentY);

    autoTable(doc, {
      startY: currentY + 5,
      head: [["Produkt", "Ilość", "Cena"]],
      body: order.items.map((item) => [
        item.product_name,
        String(item.quantity),
        `${Number(item.price).toFixed(2)} zł`,
      ]),
      theme: "grid",

      styles: {
        font: "Arial",
        fontStyle: "normal",
      },

      headStyles: {
        font: "Arial",
        fontStyle: "bold",
      },
    });
    currentY = (doc as any).lastAutoTable.finalY + 12;
    if (currentY > 250) {
      doc.addPage();
      currentY = 20;
    }
  });
  doc.save("historia-zamowien-gralnia.pdf");
}