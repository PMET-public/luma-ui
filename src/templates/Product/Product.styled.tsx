import styled from 'styled-components'

import { Root as ImageRoot, ImageTag } from '../../components/Image'
import { Root as CarouselRoot, Item as CarouselItem } from '../../components/Carousel'
import { Root as BreadcrumbsRoot } from '../../components/Breadcrumbs'
import { Wrapper as ContainerWrapper } from '../../components/Container'
import { RichText } from '../../components/PageBuilder'

export const Root = styled.div`
    display: grid;
`

export const Wrapper = styled(ContainerWrapper).attrs(props => ({
    $margin: true,
}))`
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: minmax(max-content, max-content);
    grid-gap: 1rem;
    padding-top: 2rem;

    @media ${props => props.theme.breakpoints.untilMedium} {
        display: grid;
        grid-auto-rows: max-content;
        grid-template-columns: 1fr;
    }

    @media ${props => props.theme.breakpoints.large} {
        display: grid;
        grid-auto-rows: max-content;
        grid-gap: 2rem;
        grid-template-columns: 1.25fr 1fr;
    }
`

export const Images = styled.div`
    @media ${props => props.theme.breakpoints.untilMedium} {
        position: sticky;
        top: 0;
        z-index: 0;
    }

    ${ImageRoot} {
        display: block;
        width: 100%;
    }

    ${ImageTag} {
        width: 100%;
        height: 100%;
    }

    ${CarouselRoot} {
        padding: 0;

        @media ${props => props.theme.breakpoints.untilMedium} {
            width: 100vw;
            position: relative;
            margin-left: -50vw;
            left: 50%;
        }
/* 
        @media ${props => props.theme.breakpoints.medium} {
            grid-gap: 0.5rem;
            grid-auto-flow: row;
            grid-template-columns: 1fr;
            overflow: unset;
        } */

        @media ${props => props.theme.breakpoints.large} {
            grid-auto-flow: row;
            grid-gap: 0.5rem;
            grid-template-columns: 1fr 1fr;
            overflow: unset;

            ${CarouselItem} {
                &:first-child,
                &:last-child:nth-child(even) {
                    grid-column-end: span 2;
                }
            }
        }
    }
`

export const InfoWrapper = styled.div`
    @media ${props => props.theme.breakpoints.untilMedium} {
        background-color: ${props => props.theme.colors.surface};
        border-radius: 1rem 1rem 0 0;
        box-shadow: 0 -0.5rem 0.3rem rgba(0, 0, 0, 0.05);
        color: ${props => props.theme.colors.onSurface};
        left: 50%;
        margin-left: -50vw;
        margin-top: -2rem;
        position: relative;
        width: 100vw;
        z-index: 1;

        /**
        Needed to fix this Safari bug
        https://css-tricks.com/forums/topic/safari-for-ios-z-index-ordering-bug-while-scrolling-a-page-with-a-fixed-element/
    */
        -webkit-transform: translate3d(0, 0, 0);
    }
`

export const InfoOptions = styled.div`
    display: grid;
    grid-gap: 3rem;
`

export const Info = styled.div`
    display: grid;
    grid-gap: 3rem;
    padding: 2rem ${props => props.theme.layout.margin};

    @media ${props => props.theme.breakpoints.large} {
        position: sticky;
        top: 6rem;
        width: 100%;
        max-width: 60rem;
        padding: 4rem 6rem 4rem;
    }
`

export const Header = styled.header`
    display: grid;
    grid-gap: 1.6rem;
    grid-auto-rows: max-content;

    ${BreadcrumbsRoot} {
        font-size: 1.2rem;
        color: ${props => props.theme.colors.onSurface75};
    }
`

export const Title = styled.h2`
    font-family: ${props => props.theme.typography.heading.family};
    font-weight: ${props => props.theme.typography.heading.weight};
    font-size: 2.3rem;
`

export const Sku = styled.span`
    font-size: 1.3rem;
    color: ${props => props.theme.colors.onSurface75};
`

export const Swatches = styled.div`
    display: grid;
    grid-gap: 1rem;
`

export const SwatchesTitle = styled.h3`
    font-size: 1.6rem;
    font-weight: 600;
`

export const Buttons = styled.div`
    display: grid;
    grid-gap: 1rem;
`

export const ShortDescription = styled.div`
    font-size: 1.4rem;
    line-height: 1.3;
`

export const Description = styled.div`
    ${RichText} {
        font-size: 1.4rem;
        line-height: 1.6;
        padding: 0 1rem;
        color: ${props => props.theme.colors.onSurface90};
    }
`
