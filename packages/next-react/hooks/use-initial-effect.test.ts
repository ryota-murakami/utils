import { renderHook } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'

import { useInitialEffect } from './use-initial-effect'

describe('useInitialEffect', () => {
  test('call effect in initial render', () => {
    const effect = vi.fn()
    renderHook(() => useInitialEffect(effect))
    expect(effect).toHaveBeenCalledOnce()
  })
  test('never call effect in secound and subsequent renders', () => {
    const effect = vi.fn()
    const { rerender } = renderHook(() => useInitialEffect(effect))
    expect(effect).toHaveBeenCalledOnce()
    rerender()
    expect(effect).toHaveBeenCalledOnce()
    rerender()
    expect(effect).toHaveBeenCalledOnce()
  })
})
