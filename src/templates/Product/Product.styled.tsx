import styled from 'styled-components'

import { Root as ImageRoot, ImageTag } from '../../components/Image/Image.styled'
import { Root as CarouselRoot, Item as CarouselItem } from '../../components/Carousel/Carousel.styled'
import { Root as BreadcrumbsRoot } from '../../components/Breadcrumbs/Breadcrumbs.styled'

export const Root = styled.div`
    display: grid;
`

export const Wrapper = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: minmax(max-content, max-content);
    grid-gap: 1rem;

    @media ${props => props.theme.breakpoints.smallOnly} {
        display: grid;
        grid-auto-rows: max-content;
        grid-template-columns: 1fr;
    }

    @media ${props => props.theme.breakpoints.medium} {
        display: grid;
        grid-auto-rows: max-content;
        grid-gap: 2rem;
        grid-template-columns: 1.25fr 1fr;
    }
`

export const Images = styled.div`
    display: grid;
    align-items: center;

    @media ${props => props.theme.breakpoints.smallOnly} {
        position: sticky;
        top: 6rem;
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

        @media ${props => props.theme.breakpoints.smallOnly} {
            width: 100vw;
            position: relative;
            margin-left: -50vw;
            left: 50%;
        }

        @media ${props => props.theme.breakpoints.medium} {
            max-width: 120rem;
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
    @media ${props => props.theme.breakpoints.smallOnly} {
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

export const InfoInnerWrapper = styled.div`
    @media ${props => props.theme.breakpoints.medium} {
        align-items: center;
        display: flex;
        height: calc(100vh - 8rem);
        justify-content: center;
        max-width: 60rem;
        padding: 4rem 2rem 4rem;
        position: sticky;
        top: 8rem;
    }
`

export const InfoOptions = styled.div`
    display: grid;
    grid-gap: 3rem;
`

export const Info = styled.div`
    display: grid;
    grid-auto-rows: max-content;
    grid-gap: 3rem;
    padding: 2rem ${props => props.theme.layout.margin};
`

export const Header = styled.header`
    display: grid;
    grid-gap: 1.3rem;
    grid-auto-flow: row;

    ${BreadcrumbsRoot} {
        font-size: 1.3rem;
    }
`

export const Field = styled.div`
    display: grid;
    grid-gap: 1.4rem;
`

export const Label = styled.div<{ $error?: boolean }>`
    align-items: center;
    display: grid;
    font-size: 1.6rem;
    font-weight: 600;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    grid-gap: 0.5rem;
    height: 1.2em;
    transition: color 305ms ease;

    ${props =>
        props.$error &&
        `
            color: ${props.theme.colors.onError};
            & > svg {
                fill: currentColor;
                width: 1.4em;
            }
        `};
`

export const Title = styled.h2`
    font-family: ${props => props.theme.typography.heading.family};
    font-weight: ${props => props.theme.typography.heading.weight.semi};
    font-size: ${props => props.theme.typography.heading.weight.secondary};
`

export const Sku = styled.span`
    font-size: 1.3rem;
    color: ${props => props.theme.colors.onSurface75};
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
    font-size: 1.4rem;
    line-height: 1.6;
    color: ${props => props.theme.colors.onSurface90};
`
