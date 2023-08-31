/**
 * Convert a Union type `(A|B)` to an intersection type `(A&B)`
 */
declare type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never
