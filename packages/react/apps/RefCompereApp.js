import { useRef, createRef, useState } from 'react'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
const RefCompereApp = () => {
  const [renderIndex, setRenderIndex] = useState(1)
  const fromUseRef = useRef()
  const byCreateRef = createRef()
  if (!fromUseRef.current) {
    fromUseRef.current = renderIndex
  }
  if (!byCreateRef.current) {
    // @ts-ignore
    byCreateRef.current = renderIndex
  }
  return _jsxs(
    'div',
    Object.assign(
      { className: 'App' },
      {
        children: [
          'Current render index: ',
          renderIndex,
          _jsx('br', {}, void 0),
          'First render index remembered within refFromUseRef.current:',
          fromUseRef.current,
          _jsx('br', {}, void 0),
          'First render index unsuccessfully remembered within refFromCreateRef.current:',
          byCreateRef.current,
          _jsx('br', {}, void 0),
          _jsx(
            'button',
            Object.assign(
              { onClick: () => setRenderIndex((prev) => prev + 1) },
              { children: 'Cause re-render' }
            ),
            void 0
          ),
        ],
      }
    ),
    void 0
  )
}
export default RefCompereApp
//# sourceMappingURL=RefCompereApp.js.map
