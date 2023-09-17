const isFunction = (
  functionToCheck: unknown,
): functionToCheck is (...args: any[]) => any =>
  typeof functionToCheck === 'function'

export default isFunction
