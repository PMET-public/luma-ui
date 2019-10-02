import styled from 'styled-components'

export const Root = styled.section`
    display: grid;
    grid-auto-rows: max-content;
    grid-gap: 2rem;
    width: 100%;
`

export const Product = styled.article`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 2rem;
    grid-template-columns: auto 1fr;
`

export const Thumbnail = styled.div`
    width: 14rem;
`

export const DetailsWrapper = styled.div`
    display: grid;
    grid-gap: 1.4rem;
`

export const Title = styled.div`
    font-family: ${props => props.theme.typography.heading.family};
    font-size: 1.8rem;
    font-weight: ${props => props.theme.typography.heading.weight};
`

export const Sku = styled.div`
    color: ${props => props.theme.colors.onSurface75};
    font-size: 1.3rem;
`

export const Note = styled.div``

export const Options = styled.ul`
    display: grid;
    grid-gap: 0.75rem;
`

export const Option = styled.li`
    font-size: 1.3rem;
`

export const OptionLabel = styled.span`
    display: inline-block;
    margin-right: 0.7rem;
    opacity: 0.75;
`

export const OptionValue = styled.span``

export const Actions = styled.div`
    align-items: center;
    display: grid;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    grid-gap: 2rem;
`

export const ActionQuantity = styled.div``

export const ActionRemove = styled.button`
    width: max-content;

    > svg {
        fill: currentColor;
        width: 2rem;
    }
`
