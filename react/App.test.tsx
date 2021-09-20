import { render, screen } from '@testing-library/react'
import React from 'react'

import App from './App'

test('Display App Component', () => {
  render(<App />)

  expect(screen.getByText('Hello Vite + React!')).toBeInTheDocument()
})
