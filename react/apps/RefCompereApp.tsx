import React, { useRef, createRef, useState } from 'react'

const RefCompereApp: React.FC = () => {
  const [renderIndex, setRenderIndex] = useState(1)
  const fromUseRef = useRef<number>()
  const byCreateRef = createRef<number>()
  if (!fromUseRef.current) {
    fromUseRef.current = renderIndex
  }
  if (!byCreateRef.current) {
    // @ts-ignore
    byCreateRef.current = renderIndex
  }
  return (
    <div className="App">
      Current render index: {renderIndex}
      <br />
      First render index remembered within refFromUseRef.current:
      {fromUseRef.current}
      <br />
      First render index unsuccessfully remembered within
      refFromCreateRef.current:
      {byCreateRef.current}
      <br />
      <button onClick={() => setRenderIndex((prev) => prev + 1)}>
        Cause re-render
      </button>
    </div>
  )
}

export default RefCompereApp
