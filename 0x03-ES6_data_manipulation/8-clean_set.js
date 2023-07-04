export default function cleanSet(set, str) {
  if (str && typeof str === 'string') {
    const arr = [...set];
    return arr.filter((item) => item.startsWith(str)).map((item) => item.slice(3)).join('-');
  }
  return '';
}
