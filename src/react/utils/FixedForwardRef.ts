import type React from 'react'
import { forwardRef } from 'react'
// Declare a type that works with generic components
type FixedForwardRef = <T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactElement
) => (props: P & React.RefAttributes<T>) => React.ReactElement

// Cast the old `forwardRef` to the new one
export const fixedForwardRef = forwardRef as FixedForwardRef
