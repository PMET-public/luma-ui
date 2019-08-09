import React, { useState, useEffect } from 'react'
import { Component, Props, Element, classes } from '../../lib'
import { useTheme } from '../../theme'

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

    /**
     * Reset on src Change
     */
    useEffect(() => {
        setLoaded(false)
    }, [src])

    function handleImageLoaded() {
        setLoaded(true)
    }

    return (
        <Element {...props} className={classes('image', props.className)}>
            <figure className="image__figure">
                <div className={classes('image__wrapper', ['--vignette', vignette > 0])}>
                    <img className={classes('image__img image__tag', ['--transition', transition], ['--loaded', loaded])}
                        src={src}
                        onLoad={handleImageLoaded}
                        {...{alt, width, height}}
                    />
                    <img className="image__img image__placeholder"
                        aria-hidden="true"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAFCAQAAADIpIVQAAAADklEQVR42mNkgAJGIhgAALQABsHyMOcAAAAASUVORK5CYII="
                        {...{width, height}}
                    />
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
