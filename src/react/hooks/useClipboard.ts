/* Copy from https://github.com/modulz/stitches-site/blob/master/utils/useClipboard.ts */
import copy from 'copy-to-clipboard'
import { useState, useCallback, useEffect } from 'react'

interface ReturnType {
  hasCopied: boolean
  onCopy: () => void
  value: string
}

/**
 * React hook to copy content to clipboard
 *
 * @param text the text or value to copy
 * @param timeout delay (in ms) to switch back to initial state once copied.
 */
export function useClipboard(text: string, timeout = 1500): ReturnType {
  const [hasCopied, setHasCopied] = useState(false)

  const onCopy = useCallback(() => {
    const didCopy = copy(text)
    setHasCopied(didCopy)
  }, [text])

  useEffect(() => {
    if (hasCopied) {
      const id = setTimeout(() => {
        setHasCopied(false)
      }, timeout)

      return () => clearTimeout(id)
    }
  }, [timeout, hasCopied])

  return { hasCopied, onCopy, value: text }
}
