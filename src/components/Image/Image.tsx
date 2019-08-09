import React, { useState } from 'react'
import { Component, Props, Element, classes } from '../../lib'
import { useTheme } from '../../theme'

import ErrorIcon from '@fortawesome/fontawesome-free/svgs/solid/unlink.svg'

export type ImageProps = Props<{
    alt?: string
    height?: string | number
    src: string
    width?: string | number
    vignette?: number
    transition?: boolean
}>

export const ImageComponent: Component<ImageProps> = ({
    alt,
    children,
    height,
    src,
    transition = false,
    vignette = 0,
    width,
    ...props
}) => {
    const { colors } = useTheme()
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)

    function handleImageLoaded() {
        setLoaded(true)
    }

    function handleImageError() {
        setError(true)
    }

    return (
        <Element {...props} className={classes('image', props.className)}>
            <figure className="image__figure">
                <div className={classes('image__wrapper', ['--vignette', vignette > 0], ['--error', error])}>
                    <img className={classes('image__img image__tag', ['--transition', transition], ['--loaded', loaded])}
                        src={src}
                        onLoad={handleImageLoaded}
                        onError={handleImageError}
                        {...{alt, width, height}}
                    />
                    <img className="image__img image__placeholder"
                        aria-hidden="true"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAFCAQAAADIpIVQAAAADklEQVR42mNkgAJGIhgAALQABsHyMOcAAAAASUVORK5CYII="
                        {...{width, height}}
                    />
                    {error && (
                        <ErrorIcon className="image__error-icon" />
                    )}
                </div>

                {children && (
                    <figcaption className="image__caption">
                        {children}
                    </figcaption>
                )}
            </figure>

            <style jsx global>{`
                .image {
                    display: inherit;
                }

                .image__figure {
                    display: inherit;
                }

                .image__wrapper {
                    position: relative;
                    display: inherit;
                    line-height: 0;

                    &.--error {
                        opacity: 0.5;
                    }
                    
                    &.--vignette::after {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        box-shadow: inset 0 0 10rem ${vignette}rem rgba(0, 0, 0, 0.15);
                    }
                }

                .image__tag {
                    min-height: 100%;
                    position: absolute;

                    &.--transition {
                        filter: blur(30px) opacity(0%);
                        transition: filter 305ms ease-out;

                        &.--loaded {
                            filter: blur(0) opacity(100%);
                        }
                    }
                }

                .image__placeholder {
                    background-color: ${colors.onSurface.fade(0.9)};
                }

                .image__img {
                    object-fit: cover;
                    object-position: center;                    
                }

                .image__error-icon {
                    color: ${colors.primary.fade(0.5)};
                    fill: currentColor;
                    position: absolute;
                    width: 1em;
                    height: 1em;
                    top: 50%;
                    left: 50%;
                    font-size: 3rem;
                    transform: translate(-50%, -50%);
                }
            `}</style>
        </Element>
    )
}

// .image__placeholder {
//     background-color: ${colors.onSurface};
//     animation-duration: 2s;
//     animation-iteration-count: infinite;
//     animation-name: pulsate;
//     animation-timing-function: linear;
// }

// @keyframes pulsate {
//     0% {
//         opacity: 0.15;
//     }
 
//     50% {
//         opacity: 0.05;
//     }

//     100% {
//         opacity: 0.15;
//     }
// }
