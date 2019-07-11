import React from 'react'
import { Component, classes } from '../../lib'
import { useTheme } from '../../theme'

export type ImageProps = {
    alt: string
    height?: string | number
    src: string
    width?: string | number
}

export const Image: Component<ImageProps> = ({
    as: Image = 'div',
    alt,
    children,
    height,
    src,
    width,
    ...props
}) => {
    const { colors } = useTheme()

    return (
        <Image {...props} className={classes('image', props.className)}>
            <figure>
                <picture> 
                    <img className={classes('image__img')}
                        alt={alt}
                        srcSet={src} 
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAFCAQAAADIpIVQAAAADklEQVR42mNkgAJGIhgAALQABsHyMOcAAAAASUVORK5CYII="
                        {...{width, height}}
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
                    background-color: ${colors.onSurface.fade(0.95)};
                    animation-name: pulsate;
                    animation-duration: 2s;
                    animation-iteration-count: infinite;
                    object-fit: cover;
                    object-position: center;
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
        </Image>
    )
}
