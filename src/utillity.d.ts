import { CamelToSnakeCase } from './camelToSnakeCase'

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

declare interface VoidFunction {
  (): void
}

declare type RemoveUnderscoreFirstLetter<S extends string> =
  S extends `${infer FirstLetter}${infer U}`
    ? `${FirstLetter extends '_' ? U : `${FirstLetter}${U}`}`
    : S

declare type KeysToSnakeCase<T extends object> = {
  [K in keyof T as CamelToSnakeCase<K & string>]: T[K]
}

