import React from 'react'
import { Component, classes } from '../../lib'
import { useTheme } from '../../theme'

export type ImageProps = {
    alt: string
    src: string
}

export const Image: Component<ImageProps> = ({
    alt,
    as: Image = 'div',
    children,
    src,
    ...props
}) => {
    const { typography } = useTheme()

    return (
        <Image {...props} className={classes('image', props.className)}>
            <figure>
                <img className="image__img"
                    alt={alt}
                    src={src}
                />

                {children && (
                    <figcaption className="image__caption">
                        {children}
                    </figcaption>
                )}
            </figure>

            <style jsx global>{`
                .image {
                    width: 100%;
                    display: inline-block;
                    overflow: hidden;
                }

                .image__img {
                    max-height: 100%;
                    object-fit: cover;
                    object-position: center;
                    width: 100%;
                    max-width: 100%;
                }

                .image__caption {
                   margin-top: 1rem;
                }   
            `}</style>
        </Image>
    )
}
