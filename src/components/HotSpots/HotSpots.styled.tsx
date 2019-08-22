import styled, { keyframes } from 'styled-components'

import { Root as ImageRoot } from '../Image'

const pulseAnimation = keyframes`
    0% {
        transform: scale(1);
        opacity: 0.5;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        transform: scale(1.8);
        opacity: 0;
    }
`

export const Root = styled.div`
    position: relative;
    display: inline-block;
`

export const ImageWrapper = styled.div`
    ${ImageRoot} {
        z-index: 0;
    }
`

export const Item = styled.div``

export const Button = styled.div<{ active?: boolean; coords: { x: number; y: number } }>`
    background-color: ${props => (props.active ? props.theme.colors.primary : props.theme.colors.accent)};
    border-radius: 50%;
    border: none;
    cursor: pointer;
    font-size: 2rem;
    height: 1em;
    left: ${props => props.coords.x}%;
    opacity: 0.85;
    padding: 0;
    position: absolute;
    top: ${props => props.coords.y}%;
    width: 1em;
    z-index: 2;

    &::after {
        animation: ${pulseAnimation} 2s infinite;
        border-radius: 50%;
        box-shadow: inset 0 0 1px 1px ${props => props.theme.colors.accent};
        content: '';
        display: block;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        visibility: ${props => (props.active ? 'hidden' : 'visible')};
        width: 100%;
    }
`

export const Content = styled.div<{ coords: { x: number; y: number } }>`
    align-items: center;
    background-color: ${props => props.theme.colors.surface};
    border-radius: 1rem;
    color: ${props => props.theme.colors.onSurface};
    padding: 1rem 1.3rem;
    position: absolute;
    z-index: 3;

    ${props =>
        props.coords.x > 50 &&
        `
            /* Align to the Right */
            left: unset;
            right: calc((100% - ${props.coords.x}%) - 1.3em);
        `}

    ${props =>
        props.coords.x < 50 &&
        `
            /* Align to the Left */
            left: ${props.coords.x}%;
            right: unset;
        `}

    ${props =>
        props.coords.y < 50 &&
        `
            /* Align to the Top */
            top: calc(${props.coords.y}% + 1.8em);
            bottom: unset;
        `}

    ${props =>
        props.coords.y > 50 &&
        `
            /* Align to the Bottom */
            bottom: calc((100% - ${props.coords.y}%) + 0.5em);
            top: unset;
    `}
`
