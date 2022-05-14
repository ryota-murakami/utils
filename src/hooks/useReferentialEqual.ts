import { useState } from 'react'

import useDidUpdateEffect from './useDidUpdateEffect'

const useReferentialEqual = (val: any) => {
  console.log(val)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, setState] = useState({})
  useDidUpdateEffect(() => {
    setState((prev: any) => {
      console.log(prev === val)
      return { val }
    })
  }, [val])
}

export default useReferentialEqual
