import styled from 'styled-components'

import { Root as ImageRoot, ImageTag, LoadedImage } from '../Image'

export const Root = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
`

export const Item = styled.div<{ $active?: boolean }>`
    border-radius: 0.7rem;
    border: 0.1rem solid transparent;
    padding: 0.2rem;
    transition: all 305ms ease;

    ${props =>
        props.$active &&
        `
            border-color: ${props.theme.colors.primary};

        `}

    &:hover:not([disabled]) {
        border-color: ${props => props.theme.colors.primary25};
    }
`

export const ImageWrapper = styled.div<{ $active?: boolean; $disabled?: boolean }>`
    ${ImageRoot} {
        background-color: white;
        border-radius: 0.6rem;
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

        ${LoadedImage} {
            ${props =>
                !props.$active &&
                `
                    filter: brightness(98%) contrast(92%);
                `}

            ${props =>
                props.$disabled &&
                `
                    filter: grayscale(100%) opacity(25%) contrast(90%);
                `}
        }
    }
`
