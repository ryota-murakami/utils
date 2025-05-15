/**
 * Checks if a value is falsy in JavaScript.
 *
 * In JavaScript, the falsy values are:
 * - false
 * - 0
 * - -0 (negative zero)
 * - 0n (BigInt zero)
 * - '' (empty string)
 * - null
 * - undefined
 * - NaN
 * - document.all (only falsy object in JavaScript, browser-specific)
 *
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 * @param arg - The value to check
 * @returns True if the value is falsy, false otherwise
 */
export function isFalsy(arg: any): boolean {
  return !arg
}
