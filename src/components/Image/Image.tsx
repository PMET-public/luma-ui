import React, { FunctionComponent, HTMLProps } from 'react'
import { mergeString } from '../../lib/helpers'

export type ImageProps = {
    className?: string
    src: string
    alt: string
    title?: string
    caption?: string
} & HTMLProps<HTMLElement>

export const Image: FunctionComponent<ImageProps> = ({
    alt,
    caption,
    className,
    title,
    src,
    ...props
}) => (
    <figure className={mergeString('image', className)} {...props}>
        <img className={mergeString('image__picture', className && `${className}__picture`)}
            alt={alt}
            src={src}
        />

        <figcaption>
            {title ? (
                <span className={mergeString('image__title', className && `${className}__title`)}>
                    {title}
                </span>)
                : null}

            {caption ? (
                <span className={mergeString('image__caption', className && `${className}__caption`)}>
                    {caption}
                </span>
            ) : null}
        </figcaption>
    </figure>
)
