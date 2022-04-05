type RepeatedItemResult<T> = { type: "found"; item: T } | { type: "not-found" };

export function repeatedItem<T>(array: T[]): RepeatedItemResult<T> {
  // Use the 'Set<T>' data structure
  const set = new Set<T>();
  for (const item of array) {
    if (set.has(item)) {
      return { type: "found", item };
    } else {
      set.add(item);
    }
  }
  return { type: "not-found" };
}
