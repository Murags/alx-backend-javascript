export default function updateUniqueItems(mapObject) {
  if ((mapObject instanceof Map)) {
    for (const [key, value] of mapObject) {
      if (value === 1) {
        mapObject.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return mapObject;
}
