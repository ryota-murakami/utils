import { useState } from 'react'

import useDidUpdateEffect from './useDidUpdateEffect'

const useReferentialEqual = (val: any) => {
  console.log(val)

  const [state, setState] = useState({})
  useDidUpdateEffect(() => {
    setState((prev: any) => {
      console.log(prev === val)
      return { val }
    })
  }, [val])
}

export default useReferentialEqual
