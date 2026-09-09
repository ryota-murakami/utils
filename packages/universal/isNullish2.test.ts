import { describe, expect, test } from 'vitest'

import { isNullish2 } from './isNullish2'

describe('isNullish2', () => {
  test('true is not nullish', () => {
    expect(isNullish2(true)).toBe(false)
  })
})
