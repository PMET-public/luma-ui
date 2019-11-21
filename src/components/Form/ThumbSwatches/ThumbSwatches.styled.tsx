import styled from 'styled-components'
import { Root as ImageRoot, ImageTag, LoadedImage } from '../../Image/Image.styled'

export const Items = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
`

export const Item = styled.div`
    & > label {
        position: relative;
        display: block;
        cursor: pointer;
        border: 0.1rem solid transparent;
        border-radius: 0.7rem;
        padding: 0.3rem;

        ${ImageRoot} {
            border-radius: 0.5rem;

            background-color: white;
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
        border-color: ${props => props.theme.colors.primary} !important;
        ${ImageRoot} {
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
        border-color: ${props => props.theme.colors.primary75};
        ${ImageRoot} {
            ${LoadedImage} {
                filter: brightness(98%) contrast(92%);
            }
        }
    }
`
