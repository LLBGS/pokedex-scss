export function getIndexFromUrl(url: string) {
  try {
    const re = /\/[0-9]+/;
    const tmpUrl = url.match(re);
    if (tmpUrl) {
      return tmpUrl[0].replace('/', '');
    }
  } catch (error) {
    throw new Error('Index não encontrado');
  }
}
