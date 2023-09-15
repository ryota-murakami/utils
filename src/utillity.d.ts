// expands object types one level deep
type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never

// expands object types recursively
type ExpandRecursively<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: ExpandRecursively<O[K]> }
    : never
  : T
