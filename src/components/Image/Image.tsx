import React from 'react'
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

    return (
        <ImageComponent {...props} className={classes('image', props.className)}>
            <figure>
                <div className="image__wrapper">
                    <img className="image__img image__tag"
                        src={src}
                        {...{alt, width, height}}
                    />
                    <img className="image__img image__placeholder"
                        arial-hidden="true"
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
                .image__wrapper {
                    position: relative;
                    z-index: -1;
                }

                .image__tag {
                    position: absolute;
                }

                .image__img {
                    background-color: ${colors.onSurface.fade(0.95)};
                    object-fit: cover;
                    object-position: center;
                }

                .image__placeholder {
                    animation-duration: 2s;
                    animation-iteration-count: infinite;
                    animation-name: pulsate;
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
