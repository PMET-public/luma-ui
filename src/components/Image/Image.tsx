import React from 'react'
import { Component } from '../../lib'
import { Root, LoadedImage, Placeholder, ErrorIcon } from './Image.styled'

import { useImage, Image } from '../../hooks/useImage'

export type ImageProps = {
    alt?: string
    height?: string | number
    src: Image
    width?: string | number
    vignette?: number
    transition?: boolean
    title?: string
}

export const ImageComponent: Component<ImageProps> = ({
    alt,
    height,
    src,
    title,
    transition = false,
    vignette = 0,
    width,
    ...props
}) => {
    const image = useImage(src)

    return (
        <Root $vignette={vignette} {...props}>
            <LoadedImage
                $error={image.error}
                $loaded={image.loaded}
                $transition={transition}
                alt={alt}
                height={height || image.size.height}
                src={image.src}
                title={title}
                width={width || image.size.width}
            />

            <Placeholder
                aria-hidden="true"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAFCAQAAADIpIVQAAAADklEQVR42mNkgAJGIhgAALQABsHyMOcAAAAASUVORK5CYII="
                {...{ width, height }}
            />

            {image.error && <ErrorIcon />}
        </Root>
    )
}
