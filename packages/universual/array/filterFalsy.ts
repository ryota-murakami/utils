export function filterFalsy<T>(array: (T | Falsy)[]): T[] {
  return array.filter(Boolean) as T[]
}
