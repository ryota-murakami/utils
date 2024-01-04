import { render, screen } from '@testing-library/react'
import React from 'react'

import { Spacer } from './Spacer'

test('renders', () => {
  const { container } = render(<Spacer size="sm" />)
  expect(container.querySelector('.h-20')).toBeInTheDocument()
})
