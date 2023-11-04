// import from https://github.com/radix-ui/primitives/blob/dbefd647297bd6594577c3fc253dc874fbe11438/packages/react/use-callback-ref/src/useCallbackRef.tsx
import * as React from 'react'

/**
 * A custom hook that converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop or avoid re-executing effects when passed as a dependency
 */
function useCallbackRef<T extends (...args: any[]) => any>(
  callback: T | undefined,
): T {
  const callbackRef = React.useRef(callback)

  React.useEffect(() => {
    callbackRef.current = callback
  })

  // https://github.com/facebook/react/issues/19240
  return React.useMemo(
    () => ((...args) => callbackRef.current?.(...args)) as T,
    [],
  )
}

export { useCallbackRef }
