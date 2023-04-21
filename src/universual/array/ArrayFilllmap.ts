export function arrayFillmap(
  arrayLength: number,
  callback: (value: any, index: number, array: any[]) => unknown
): unknown[] {
  return new Array(arrayLength).fill(0).map(callback)
}
