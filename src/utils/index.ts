export function createPageUrl(pageName: string) {
    return '/' + pageName.replace(/ /g, '-');
}

export function normalizeText(text: string) {
  return text
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "");
}

  export function padZero(number: number | null) {
  if (number === null) return;
  return String(number).padStart(2, "0");
  }

  export function getStatusClass(status: string) {
    switch (status) {
      case "Oczekująca":
        return "bg-yellow-500/10 text-yellow-400";
      case "Potwierdzona":
        return "bg-green-500/10 text-green-400";
      case "Anulowana":
        return "bg-red-500/10 text-red-400";  
      default:
        return "";
    }
  }