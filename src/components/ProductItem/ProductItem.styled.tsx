import styled from 'styled-components'

import { Root as ImageRoot, ImageTag } from '../Image'
import { Root as PriceRoot } from '../Price'

export const Root = styled.div`
    display: block;
    overflow: hidden;
    position: relative;
`

export const Badge = styled.span`
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.onAccent};
    font-size: 1.2rem;
    left: 2rem;
    letter-spacing: 0.05rem;
    padding: 0.5rem 0.75rem;
    position: absolute;
    text-transform: uppercase;
    top: 2rem;
    z-index: 1;
`

export const ImageWrapper = styled.div`
    ${ImageRoot} {
        display: block;
        position: relative;
    }

    ${ImageTag} {
        height: 100%;
        width: 100%;
        min-height: 100%;
        max-height: 90vh;
    }
`

export const Colors = styled.ul`
    display: grid;
    grid-auto-flow: column;
`

export const Color = styled.li`
    display: inline-block;
    height: 0.65rem;
    width: 100%;
`

export const Details = styled.span`
    display: grid;
    font-size: 1.4rem;
    grid-gap: 0.5rem;
    padding: 1rem;

    @media ${props => props.theme.breakpoints.medium} {
        font-size: 1.6rem;
    }
`

export const Title = styled.div`
    font-size: 1em;
    font-weight: 600;
`

export const PriceWrapper = styled.span`
    ${PriceRoot} {
        font-size: 0.9em;
    }
`
