import React, { FunctionComponent, HTMLProps } from 'react'

export type ImageProps = {
    src: string
    alt: string
} & HTMLProps<HTMLElement>

export const Image: FunctionComponent<ImageProps> = ({
    alt,
    children,
    src,
}) => (
    <figure className="image">
        <img className="image__img"
            alt={alt}
            src={src}
        />

        {children && (
            <figcaption>
                {children}
            </figcaption>
        )}

        <style jsx>{`
            .image {
                position: relative;
                width: 100%;
            }

            .image__img {
                max-height: 100%;
                object-fit: cover;
                object-position: center;
                overflow: hidden;
                max-width: 100%;
            }
        `}</style>
    </figure>
)
