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