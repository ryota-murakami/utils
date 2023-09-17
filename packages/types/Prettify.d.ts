// https://www.youtube.com/shorts/2lCCKiWGlC0
declare type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}
