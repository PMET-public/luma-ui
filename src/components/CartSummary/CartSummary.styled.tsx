import styled from 'styled-components'

export const Title = styled.div`
    font-family: ${props => props.theme.typography.heading.family};
    font-weight: ${props => props.theme.typography.heading.weight};
    font-size: 1.5em;
    margin-bottom: 1rem;
`

export const PriceItem = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
`

export const Label = styled.strong<{ $bold?: boolean }>`
    font-weight: ${props => (props.$bold ? 600 : 400)};
`

export const Buttons = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-gap: 1rem;
    grid-auto-rows: max-content;
`
export const Root = styled.div`
    display: grid;
    grid-auto-rows: max-content;
    grid-gap: 1.6rem;
`
