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
    align-items: flex-start;
    display: grid;
    grid-gap: 1.4rem;
    grid-template-areas:
        'title'
        'price'
        'sku'
        'options'
        'actions';

    @media ${({ theme }) => theme.breakpoints.medium} {
        grid-gap: 2rem;
        grid-template:
            'title price'
            'sku .'
            'options .'
            'actions .';
        grid-template-rows: max-content max-content max-content max-content;
    }
`

export const Title = styled.div`
    grid-area: title;
    font-family: ${({ theme }) => theme.typography.heading.family};
    font-size: 1.8rem;
    font-weight: ${({ theme }) => theme.typography.heading.weight};
`

export const Price = styled.div`
    grid-area: price;
`

export const Sku = styled.div`
    grid-area: sku;
    color: ${({ theme }) => theme.colors.onSurface75};
    font-size: 1.3rem;
`

export const Options = styled.ul`
    grid-area: options;
    display: flex;
    flex-wrap: wrap;
`

export const Option = styled.li`
    font-size: 1.3rem;
    &:not(:last-child) {
        margin-right: 1rem;
    }
`

export const OptionLabel = styled.span`
    display: inline-block;
    margin-right: 0.3rem;
    opacity: 0.75;
`

export const OptionValue = styled.span``

export const Actions = styled.div`
    grid-area: actions;
    align-items: center;
    display: grid;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    grid-gap: 4rem;
`

export const ActionQuantity = styled.div``
