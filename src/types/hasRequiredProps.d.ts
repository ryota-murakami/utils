declare type HasRequiredProps<T, True, False> =
  ExtractNonOptionalKeys<T> extends never ? False : True
