export function createPageUrl(pageName: string) {
    return '/' + pageName.replace(/ /g, '-');
}

export function normalizeText(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  }