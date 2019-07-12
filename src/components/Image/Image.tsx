import React, { useState, useEffect } from 'react'
import { Component, classes } from '../../lib'
import { useTheme } from '../../theme'

export type ImageProps = {
    alt?: string
    height?: string | number
    src: string
    width?: string | number
}

export const ImageComponent: Component<ImageProps> = ({
    as: ImageComponent = 'div',
    alt,
    children,
    height,
    src,
    width,
    ...props
}) => {
    const { colors } = useTheme()
    const [ loaded, setLoaded ] = useState(false)

    useEffect(() => {
        const image = new Image()
        image.onload = () => setLoaded(true)
        image.src = src
    }, [src])

    return (
        <ImageComponent {...props} className={classes('image', props.className)}>
            <figure>
                <picture> 
                    <img className={classes('image__img', ['--loaded', loaded])}
                        srcSet={src} 
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAFCAQAAADIpIVQAAAADklEQVR42mNkgAJGIhgAALQABsHyMOcAAAAASUVORK5CYII="
                        {...{alt, width, height}}
                    />
                </picture>

                {children && (
                    <figcaption className="image__caption">
                        {children}
                    </figcaption>
                )}
            </figure>

            <style jsx global>{`
                .image__img {
                    animation-duration: 2s;
                    animation-iteration-count: infinite;
                    animation-name: pulsate;
                    background-color: ${colors.onSurface.fade(0.95)};
                    filter: blur(10px);
                    object-fit: cover;
                    object-position: center;
                    transition: filter 100ms ease;

                    &.--loaded {
                        filter: blur(0);
                    }
                    
                }


                @keyframes pulsate {
                    0% {
                        background-color: ${colors.onSurface.fade(0.95)};
                    }
                    50% {
                        background-color: ${colors.onSurface.fade(0.85)};
                    }
                    100 {
                        background-color: ${colors.onSurface.fade(0.95)};
                    }
                }
            `}</style>
        </ImageComponent>
    )
}
