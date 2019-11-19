import styled from 'styled-components'

export const Root = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 2rem;
`
export const List = styled.div`
    display: grid;
    grid-gap: 3rem 0.2rem;
    grid-template-columns: repeat(12, 1fr);
    width: 100%;

    @media ${props => props.theme.breakpoints.large} {
        grid-gap: 3rem 0.5rem;
    }

    @media ${props => props.theme.breakpoints.xLarge} {
        grid-gap: 3rem;
    }
`

export const ItemWrapper = styled.div`
    @media ${props => props.theme.breakpoints.smallOnly} {
        grid-column-end: span 6;

        &:nth-child(3n + 1) {
            grid-column-end: span 12;
        }
    }

    @media ${props => props.theme.breakpoints.mediumOnly} {
        grid-column-end: span 6;

        &:nth-child(3n + 1) {
            grid-column-end: span 12;
        }
    }

    @media ${props => props.theme.breakpoints.largeOnly} {
        grid-column-end: span 4;

        &:nth-child(5n + 1),
        &:nth-child(5n + 2) {
            grid-column-end: span 6;
        }
    }

    @media ${props => props.theme.breakpoints.xLarge} {
        grid-column-end: span 3;

        &:nth-child(7n + 1),
        &:nth-child(7n + 2),
        &:nth-child(7n + 3) {
            grid-column-end: span 4;
        }
    }
`
