// from https://github.com/reduxjs/redux-toolkit/blob/4fbd29f0032f1ebb9e2e621ab48bbff5266e312c/packages/toolkit/src/query/tsHelpers.ts
// eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/explicit-module-boundary-types
export function assertCast<T>(v: any): asserts v is T {}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function safeAssign<T extends Record<string, unknown>>(
  target: T,
  ...args: Array<Partial<NoInfer<T>>>
) {
  Object.assign(target, ...args)
}

export function assertIsDefined<T>(x: T | undefined): asserts x is T {}
