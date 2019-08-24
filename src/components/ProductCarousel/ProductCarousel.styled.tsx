import styled from 'styled-components'

import { Root as CarouselRoot } from '../Carousel'

export const Root = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-auto-columns: minmax(0, 1fr);
    width: 100%;
`

export const Title = styled.div`
    font-family: ${props => props.theme.typography.heading.family};
    font-weight: ${props => props.theme.typography.heading.weight};
    font-size: ${props => props.theme.typography.heading.size};
    padding: 0 2rem;
`

export const CarouselWrapper = styled.div`
    ${CarouselRoot} {
        @media ${props => props.theme.breakpoints.medium} {
            --show: 2 !important;
        }

        @media ${props => props.theme.breakpoints.large} {
            --show: 3 !important;
        }
    }
`
