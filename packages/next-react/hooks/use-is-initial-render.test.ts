import { renderHook } from '@testing-library/react'
import { describe, test, expect } from 'vitest'

import { useIsInitialRender } from './use-is-initial-render'

describe('useIsInitialRender', () => {
  test('should return true on initial render', () => {
    const { result, rerender } = renderHook(() => useIsInitialRender())
    expect(result.current).toEqual(true)
    rerender()
    expect(result.current).toEqual(false)
    rerender()
    expect(result.current).toEqual(false)
    rerender()
    expect(result.current).toEqual(false)
  })
})
