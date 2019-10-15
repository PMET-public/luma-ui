import styled from 'styled-components'

import { Root as ImageRoot, ImageTag, LoadedImage } from '../Image'

export const Root = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
`

export const Item = styled.div`
    & > label {
        position: relative;
        display: block;
        cursor: pointer;

        ${ImageRoot} {
            border: 0.1rem solid transparent;
            background-color: white;
            border-radius: 0.7rem;
            display: block;
            overflow: hidden;
            transition: all 305ms ease;

            ${ImageTag} {
                height: auto;
                object-fit: cover;
                object-position: center;
                overflow: hidden;
                width: 100%;
            }

            ${LoadedImage} {
                filter: brightness(98%) contrast(94%);
            }
        }
    }

    & > input[type='radio'] {
        opacity: 0;
        position: absolute;
    }

    & > input[type='radio']:checked + label,
    & > input[type='radio']:focus + label {
        ${ImageRoot} {
            border-color: ${props => props.theme.colors.primary} !important;
            ${LoadedImage} {
                filter: brightness(100%) contrast(100%) !important;
            }
        }
    }

    & > input[type='radio']:disabled + label {
        ${ImageRoot} {
            ${LoadedImage} {
                filter: grayscale(100%) opacity(25%) contrast(90%);
            }
        }
    }

    &:hover > input[type='radio']:not(:disabled) + label {
        ${ImageRoot} {
            border-color: ${props => props.theme.colors.primary75};

            ${LoadedImage} {
                filter: brightness(98%) contrast(92%);
            }
        }
    }
`
