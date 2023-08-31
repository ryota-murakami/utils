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

declare interface VoidFunction {
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

// https://www.youtube.com/shorts/2lCCKiWGlC0
declare type Pretty<T> = {
  [K in keyof T]: T[K]
} & {}

/**
 Matches any [primitive value](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).
 */
declare type Primitive =
  | null
  | undefined
  | string
  | number
  | boolean
  | symbol
  | bigint

/**
 Matches a JSON array.

 @category Basic
 */
declare type JsonArray = JsonValue[]

/**
 Matches any valid JSON primitive value.

 @category Basic
 */
declare type JsonPrimitive = string | number | boolean | null

/**
 Matches any valid JSON value.

 @see `Jsonify` if you need to transform a type to one that is assignable to `JsonValue`.

 @category Basic
 */
declare type JsonValue = JsonPrimitive | JsonObject | JsonArray

/**
 Matches a JSON object.

 This type can be usxeful to enforce some input to be JSON-compatible or as a super-type to be extended from. Don't use this as a direct return type as the user would have to double-cast it: `jsonObject as unknown as CustomResponse`. Instead, you could extend your CustomResponse type from it to ensure your type only uses JSON-compatible types: `interface CustomResponse extends JsonObject { … }`.

 @category Basic
 */
declare type JsonObject = { [Key in string]?: JsonValue }
