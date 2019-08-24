import styled from 'styled-components'

import { Root as ImageRoot, ImageTag } from '../Image'

export const Root = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
`

export const Item = styled.button<{ $active?: boolean; disabled: boolean }>`
    border-radius: 0.5rem;
    border: 0.1rem solid ${props => props.theme.colors.primary25};
    padding: 0.3rem;
    transition: all 305ms ease;

    ${props =>
        props.disabled &&
        `
            filter: opacity(30%) contrast(80%);
        `}

    ${props =>
        props.$active &&
        `
            border-color: ${props.theme.colors.primary};
        `}

    &:hover:not([disabled]) {
        border-color: ${props => props.theme.colors.primary75};
    }
`

export const ImageWrapper = styled.div`
    ${ImageRoot} {
        background-color: white;
        border-radius: 0.5rem;
        display: block;
        overflow: hidden;
        overflow: hidden;

        ${ImageTag} {
            height: auto;
            object-fit: cover;
            object-position: center;
            overflow: hidden;
            width: 100%;
        }
    }
`
