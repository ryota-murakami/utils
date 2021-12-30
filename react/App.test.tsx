import { render } from '@testing-library/react'
import React from 'react'

import App from './App'

test('Render without Crashing', () => {
  const { container } = render(<App />)

  expect(container.firstChild).toBeInTheDocument()
})
