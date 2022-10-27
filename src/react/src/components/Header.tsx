import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
  font-size: 2rem;
`

const Header: React.FC = () => (
  <header>
    <Text className="text-black">Header</Text>
  </header>
)

export default Header
