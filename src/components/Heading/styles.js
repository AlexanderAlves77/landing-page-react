import styled, { css } from 'styled-components'

export const Title = styled.h1`
    ${({ theme, dark }) => css`
        color: ${dark ? theme.colors.white : theme.colors.primaryColor }
    `}
`