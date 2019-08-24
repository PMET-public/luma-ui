import styled from 'styled-components'

import ErrorIconSvg from '@fortawesome/fontawesome-free/svgs/solid/unlink.svg'

export const Root = styled.div<{ $vignette?: number }>`
    display: inline-block;
    position: relative;
    display: inherit;
    line-height: 0;

    ${props =>
        !!props.$vignette &&
        `
            &::after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                box-shadow: inset 0 0 10rem ${props.$vignette}rem rgba(0, 0, 0, 0.15);
            }
        `}
`

export const ImageTag = styled.img`
    max-width: 100%;
`

export const LoadedImage = styled(ImageTag)<{ $transition?: boolean; $loaded?: boolean; $error?: boolean }>`
    min-height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;

    ${props => props.$error && 'opacity: 0;'}

    ${props =>
        props.$transition &&
        `
            filter: blur(30px) opacity(0%);
            transition: filter 305ms ease-out;
        `}

    ${props =>
        props.$loaded &&
        `
            filter: blur(0) opacity(100%);
        `}
`

export const Placeholder = styled(ImageTag)`
    background: linear-gradient(
        -45deg,
        ${props => props.theme.colors.onSurface25},
        ${props => props.theme.colors.onSurface15}
    );
    background-size: 300%;
`

export const ErrorIcon = styled(ErrorIconSvg)`
    color: ${props => props.theme.colors.onSurface25};
    fill: currentColor;
    font-size: 3rem;
    height: 1em;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1em;
`
