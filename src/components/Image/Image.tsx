import React from 'react'
import { Component, classes } from '../../lib'

export type ImageProps = {
    alt: string
    src: string
    mobile?: string
}

export const Image: Component<ImageProps> = ({
    as: Image = 'div',
    alt,
    children,
    mobile,
    src,
    ...props
}) => {
    return (
        <Image {...props} className={classes('image', props.className)}>
            <figure>
                <picture>
                    {!!mobile && (
                        <source 
                        srcSet={mobile} 
                        media="(max-width: 599px)"
                        />
                    )}

                    <source 
                        srcSet={src} 
                        media="(min-width: 600px)"
                    />
                
                    <img className="image__img"
                        alt={alt}
                        src={src}
                    />
                </picture>

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
                    height: 100%;
                    max-height: 100%;
                    max-width: 100%;
                    object-fit: cover;
                    object-position: center;
                    width: 100%;
                }
            `}</style>
        </Image>
    )
}
