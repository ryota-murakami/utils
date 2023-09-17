declare type KeysToCamelCase<T extends object> = {
  [K in keyof T as Lowercase<K & string>]: T[K]
}
