import styled from 'styled-components'

import { Root as PriceRoot } from '../Price/Price.styled'
import ImageComponent from '../Image'

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

export const Image = styled(ImageComponent)`
    width: 100%;
    height: 100%;
`

export const Colors = styled.ul`
    display: grid;
    grid-auto-flow: column;
    margin-top: -1rem;
    position: relative;
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
    font-size: 1.6rem;
    font-weight: 600;
`

export const PriceWrapper = styled.span`
    ${PriceRoot} {
        font-size: 0.9em;
    }
`
