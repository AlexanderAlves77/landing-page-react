import P from 'prop-types'
import * as Styled from './styles'

export const Heading = ({ children, dark = false }) => {
  return <Styled.Title dark={dark}>{children}</Styled.Title>
}

Heading.propTypes = {
    children: P.node.isRequired,
    dark: P.bool.isRequired
}