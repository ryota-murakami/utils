// from https://github.com/denoland/deno_std/issues/1126#issuecomment-900947143
declare type Typify<T> = { [K in keyof T]: T[K] }
