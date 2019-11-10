import styled from 'styled-components'

export const Root = styled.section`
    display: grid;
    grid-auto-rows: max-content;
    /* grid-gap: 2rem; */
    width: 100%;
`

export const Product = styled.article`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 2rem;
    grid-template-columns: auto 1fr;

    &:not(:last-of-type) {
        border-bottom: 0.1rem solid ${props => props.theme.colors.onSurface10};
        margin-bottom: 2rem;
        padding-bottom: 2rem;
    }
`

export const Thumbnail = styled.div`
    width: 10rem;
    @media ${props => props.theme.breakpoints.medium} {
        width: 16rem;
    }
    @media ${props => props.theme.breakpoints.large} {
        width: 18rem;
    }
`

export const DetailsWrapper = styled.div`
    align-items: center;
    display: grid;
    grid-gap: 1.2rem 1rem;
    grid-template-areas:
        'title title'
        'sku sku'
        'options options'
        'price quantity';
    grid-template-rows: repeat(4, max-content);
    grid-template-columns: repeat(2, max-content);
    font-size: 1.4rem;
`

export const Title = styled.div`
    grid-area: title;
    font-family: ${({ theme }) => theme.typography.heading.family};
    font-weight: ${({ theme }) => theme.typography.heading.weight.bold};
    font-size: 1.6rem;
    padding-top: 1rem;
`

export const Price = styled.div`
    grid-area: price;
`

export const Sku = styled.div`
    grid-area: sku;
    color: ${({ theme }) => theme.colors.onSurface75};
`

export const Options = styled.ul`
    grid-area: options;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: -0.75rem;
`

export const Option = styled.li`
    margin-bottom: 0.75rem;
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

export const Quantity = styled.div`
    grid-area: quantity;
`
