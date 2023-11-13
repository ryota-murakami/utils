import { Link as _Link } from 'react-router-dom'
import styled from 'styled-components'

const LinkWrapper = styled.div`
  font-size: 24px;
  padding: 10px;
  background-image: linear-gradient(
    to right,
    #77a1d3 0%,
    #79cbca 51%,
    #77a1d3 100%
  );
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: max(0px, min(8px, calc((100vw - 4px - 100%) * 9999))) / 8px;
  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`

export const Link = ({ children, to }) => {
  return (
    <LinkWrapper>
      <_Link to={to}>{children}</_Link>
    </LinkWrapper>
  )
}
