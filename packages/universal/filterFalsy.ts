type Falsy = false | 0 | '' | null | undefined
export function filterFalsy<T = unknown>(array: (T | Falsy)[]): T[] {
  return array.filter(Boolean) as T[]
}
