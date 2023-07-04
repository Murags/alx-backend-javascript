export default function updateUniqueItems(mapObject) {
  for (const [key, value] of mapObject) {
    if (value === 1) {
      try {
        mapObject.set(key, 100);
      } catch (e) {
        throw new Error('Cannot process');
      }
    }
  }
  return mapObject;
}
