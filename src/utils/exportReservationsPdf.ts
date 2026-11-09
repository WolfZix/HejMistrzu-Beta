
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

type Reservation = {
  id: number;
  reservation_date: string;
  reservation_time: string;
  duration: number | null;
  people_count: number;
  status: string;
  created_at: string;
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

export async function exportReservationsPdf() {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/reservations/myReservations`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Nie udało się pobrać historii rezerwacji");
  }

  const data: {
    success: boolean;
    reservations: Reservation[];
  } = await response.json();

  if (!data.success) {
    throw new Error("Nie udało się pobrać historii rezerwacji");
  }

  const doc = new jsPDF();

  const fontRegular = await fetch("/fonts/ARIAL.TTF").then((res) => {
    if (!res.ok) throw new Error("Nie udało się załadować fontu Arial");
    return res.arrayBuffer();
  });

  const fontBold = await fetch("/fonts/ARIALBD.TTF").then((res) => {
    if (!res.ok) throw new Error("Nie udało się załadować pogrubionego fontu Arial");
    return res.arrayBuffer();
  });

  const toBase64 = (buffer: ArrayBuffer) =>
    btoa(
      new Uint8Array(buffer).reduce(
        (result, byte) => result + String.fromCharCode(byte),
        ""
      )
    );

  doc.addFileToVFS("Arial.ttf", toBase64(fontRegular));
  doc.addFont("Arial.ttf", "Arial", "normal");

  doc.addFileToVFS("Arial-Bold.ttf", toBase64(fontBold));
  doc.addFont("Arial-Bold.ttf", "Arial", "bold");

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const CONTENT_LEFT = 18;
  const CONTENT_RIGHT = pageWidth - 18;

  function drawPageHeader() {
    doc.setFillColor(...COLORS.background);
    doc.rect(0, 0, pageWidth, pageHeight, "F");

    doc.setFillColor(...COLORS.card);
    doc.setDrawColor(...COLORS.border);
    doc.roundedRect(10, 10, pageWidth - 20, pageHeight - 20, 4, 4, "FD");

    doc.setFillColor(16, 18, 22);
    doc.roundedRect(14, 14, pageWidth - 28, 42, 3, 3, "F");

    doc.setFont("Arial", "bold");
    doc.setFontSize(22);
    doc.setTextColor(...COLORS.gold);
    doc.text("Hej Mistrzu!", CONTENT_LEFT, 29);

    doc.setFont("Arial", "normal");
    doc.setFontSize(11);
    doc.setTextColor(...COLORS.gray);
    doc.text("Historia rezerwacji", CONTENT_LEFT, 38);

    doc.setFontSize(9);
    doc.setTextColor(...COLORS.muted);
    doc.text(
      `Wygenerowano: ${new Date().toLocaleDateString("pl-PL", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}`,
      CONTENT_LEFT,
      47
    );
  }

  const formatDate = (date: string) => {
    const [year, month, day] = date.slice(0, 10).split("-");
    return `${day}.${month}.${year}`;
  };

  const getReservationType = (duration: number | null) => {
    if (duration === null) return "Gralnia";
    return "Sesja RPG";
  };

  const getDuration = (duration: number | null) => {
    if (duration === null) return "—";
    if (duration === 0) return "Bez limitu";
    return `${duration}h`;
  };

  const reservations = data.reservations;

  autoTable(doc, {
    startY: 60,
    margin: {
      top: 60,
      bottom: 20,
      left: CONTENT_LEFT,
      right: pageWidth - CONTENT_RIGHT,
    },
    head: [["Nr", "Data", "Godzina", "Rodzaj", "Czas", "Osoby", "Status"]],
    body: reservations.map((reservation) => [
      `#${reservation.id}`,
      formatDate(reservation.reservation_date),
      reservation.reservation_time.slice(0, 5),
      getReservationType(reservation.duration),
      getDuration(reservation.duration),
      String(reservation.people_count),
      reservation.status,
    ]),
    theme: "grid",
    styles: {
      font: "Arial",
      fontStyle: "normal",
      fontSize: 8,
      textColor: COLORS.white,
      fillColor: COLORS.card,
      lineColor: COLORS.border,
      lineWidth: 0.2,
      cellPadding: 2.5,
      valign: "middle",
    },
    headStyles: {
      font: "Arial",
      fontStyle: "bold",
      fontSize: 8,
      textColor: COLORS.gold,
      fillColor: [16, 18, 22],
      lineColor: COLORS.border,
    },
    alternateRowStyles: {
      fillColor: [20, 23, 29],
    },
    willDrawPage: () => {
      drawPageHeader();
    },
    showHead: "everyPage",
  });

  if (reservations.length === 0) {
    doc.setFont("Arial", "normal");
    doc.setFontSize(10);
    doc.setTextColor(...COLORS.gray);
    doc.text(
      "Brak zapisanych rezerwacji.",
      CONTENT_LEFT,
      72
    );
  }

  doc.save(`historia-rezerwacji-hejmistrzu-${new Date().toISOString().split("T")[0]}.pdf`);
}
