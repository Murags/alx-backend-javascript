export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    // eslint-disable-next-line
    let value = array[idx];
    // eslint-disable-next-line
    array[idx] = appendString + value;
  }

  return array;
}
