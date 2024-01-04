---
to: <%= path %>/<%= Name %>/<%= Name %>.test.tsx
---
<%
  const Name = h.changeCase.pascal(name)
%>
import React from 'react'
import { render, screen } from '@testing-library/react'
import { <%= Name %> } from './<%= Name %>'

test('renders', () => {
  render(<<%= Name %> />)
  expect(screen.getByTestId('<%= name %>-container')).toBeInTheDocument()
})
