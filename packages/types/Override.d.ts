/**
 * A utility type that allows you to override properties of one type with another.
 *
 * @template T1 - The base type whose properties will be overridden.
 * @template T2 - The type containing the properties to override with.
 * @returns A new type that is the result of overriding the properties of T1 with T2.
 */
declare type Override<T1, T2> = T2 extends any ? Omit<T1, keyof T2> & T2 : never
