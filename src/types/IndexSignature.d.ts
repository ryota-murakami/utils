declare type IndexSignature<O extends object> = {
  [P in keyof O]: O[P]
}
