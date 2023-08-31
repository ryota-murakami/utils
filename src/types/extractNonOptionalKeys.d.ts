/**
 * A utility type that returns the keys of a given object type `T` that are not optional.
 *
 * @template T - The object type to extract non-optional keys from.
 */
declare type ExtractNonOptionalKeys<T> = {
  [K in keyof T]-?: undefined extends T[K] ? never : K
}[keyof T]
