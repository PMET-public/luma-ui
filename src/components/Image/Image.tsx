import React from 'react'
import { Component, classes } from '../../lib'
import { useTheme } from '../../theme'

export type ImageProps = {
    alt: string
    src: string
    title?: string
}

export const Image: Component<ImageProps> = ({
    alt,
    as: Image = 'div',
    children,
    src,
    title,
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
                    <figcaption className="image__title">
                        {children}
                    </figcaption>
                )}
            </figure>

            <style jsx global>{`
                .image {
                    position: relative;
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

                .image__title {
                    align-items: center;
                    bottom: 0;
                    display: flex;
                    font-family: ${typography.headingFamily};
                    font-size: 8vw;
                    font-weight: ${typography.headingWeight};
                    justify-content: center;
                    left: 0;
                    position: absolute;
                    right: 0;
                    text-align: center;
                    text-transform: uppercase;
                    top: 0;
                    z-index: 1;
                }   
            `}</style>
        </Image>
    )
}
