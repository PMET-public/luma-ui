import styled from 'styled-components'

export const Root = styled.div`
    display: grid;
    grid-gap: 0.75rem;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
`

export const Label = styled.em``

export const RegularPrice = styled.span<{ $hasSpecial?: boolean }>`
    ${props =>
        props.$hasSpecial &&
        `
            text-decoration: line-through;
            opacity: 0.7;
        `}
`

export const SpecialPrice = styled.span``
