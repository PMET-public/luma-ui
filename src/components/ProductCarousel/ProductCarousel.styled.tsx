import styled from 'styled-components'

import { Root as CarouselRoot } from '../Carousel'

export const Root = styled.div`
    width: 100%;
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
