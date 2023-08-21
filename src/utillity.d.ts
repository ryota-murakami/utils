/**
 * Creates a new type that has all properties of the input type marked as required.
 * @template Type - The input type to make concrete.
 * @typedef {Object} Concrete
 * @property {Type[Property]} Property - The required property of the concrete type.
 * @example
 * // Create a concrete type from a partially defined type
 * interface PartialUser {
 *   name?: string;
 *   age?: number;
 * }
 * type User = Concrete<PartialUser>;
 * const user: User = {
 *   name: 'John',
 *   age: 30
 * };
 */
declare type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property]
}

/**
 * A utility type that allows you to override properties of one type with another.
 *
 * @template T1 - The base type whose properties will be overridden.
 * @template T2 - The type containing the properties to override with.
 * @returns A new type that is the result of overriding the properties of T1 with T2.
 */
declare type Override<T1, T2> = T2 extends any ? Omit<T1, keyof T2> & T2 : never

/**
 * Convert a Union type `(A|B)` to an intersection type `(A&B)`
 */
declare type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never

/**
 * A utility type that returns the keys of a given object type `T` that are not optional.
 *
 * @template T - The object type to extract non-optional keys from.
 */
declare type ExtractNonOptionalKeys<T> = {
  [K in keyof T]-?: undefined extends T[K] ? never : K
}[keyof T]

declare type HasRequiredProps<T, True, False> =
  ExtractNonOptionalKeys<T> extends never ? False : True

declare type OptionalIfAllPropsOptional<T> = HasRequiredProps<T, T, T | never>

declare type NoInfer<T> = [T][T extends any ? 0 : never]

declare type UnwrapPromise<T> = T extends PromiseLike<infer V> ? V : T

declare type MaybePromise<T> = T | PromiseLike<T>

declare type OmitFromUnion<T, K extends keyof T> = T extends any
  ? Omit<T, K>
  : never

declare type IsAny<T, True, False = never> = true | false extends (
  T extends never ? true : false
)
  ? True
  : False

declare type CastAny<T, CastTo> = IsAny<T, CastTo, T>

declare type AnyFunction = (...args: any[]) => any

// skip unnecessary generics position
declare type _ = any

// from https://github.com/denoland/deno_std/issues/1126#issuecomment-900947143
declare type Typify<T> = { [K in keyof T]: T[K] }

declare type IndexSignature<O extends object> = {
  [P in keyof O]: O[P]
}

declare type EmptyObject = {
  [K in string | number]: never
}

declare type Awaitable<T> = T | PromiseLike<T>
declare type Nullable<T> = T | null | undefined
declare type Arrayable<T> = T | Array<T>
declare type ArgumentsType<T> = T extends (...args: infer U) => any ? U : never

type Falsy = false | 0 | 0n | '' | null | undefined

interface VoidFunction {
  (): void
}

declare type RemoveUnderscoreFirstLetter<S extends string> =
  S extends `${infer FirstLetter}${infer U}`
    ? `${FirstLetter extends '_' ? U : `${FirstLetter}${U}`}`
    : S

declare type CamelToSnakeCase<S extends string> =
  S extends `${infer T}${infer U}`
    ? `${T extends Capitalize<T> ? '_' : ''}${RemoveUnderscoreFirstLetter<
        Lowercase<T>
      >}${CamelToSnakeCase<U>}`
    : S

declare type KeysToSnakeCase<T extends object> = {
  [K in keyof T as CamelToSnakeCase<K & string>]: T[K]
}

declare type Brand<K, T> = K & { __brand: T }
