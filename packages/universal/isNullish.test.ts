import { describe, test, expect } from 'vitest'

import { isNullish } from './isNullish'

describe('isNullish', () => {
  test('should return true when pass undefined', () => {
    expect(isNullish(undefined)).toBe(true)
  })
  test('should return true when pass null', () => {
    expect(isNullish(null)).toBe(true)
  })
  test('should return false when pass false', () => {
    expect(isNullish(false)).toBe(false)
  })
  test('should return false when pass ""', () => {
    expect(isNullish('')).toBe(false)
  })
})
