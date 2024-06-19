declare type DistributiveOmit<T, K extends PropertyKey> = T extends any
  ? Omit<T, K>
  : never
