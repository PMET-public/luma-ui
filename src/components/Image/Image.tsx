import React, { useRef } from 'react'
import { Component } from '../../lib'
import { Root, LoadedImage, Placeholder, ErrorIcon } from './Image.styled'

import { useImage, Image } from '../../hooks/useImage'
import { useMeasure } from '../../hooks/useMeasure'

export type ImageProps = {
    alt?: string
    height?: string | number
    src: Image
    width?: string | number
    vignette?: number
    transition?: boolean
    title?: string
    lazy?: boolean
}

export const ImageComponent: Component<ImageProps> = ({
    alt,
    src,
    title,
    transition = false,
    vignette = 0,
    width: _width,
    height: _height,
    lazy = true,
    ...props
}) => {
    const imageElem = useRef<HTMLImageElement>(null)

    const { offsetY } = useMeasure(imageElem)

    const image = useImage(src, lazy ? offsetY - 200 : undefined)

    const width = _width || image.size.width
    const height = _height || image.size.height

    return (
        <Root $vignette={image.loaded ? vignette : 0} {...props}>
            <LoadedImage
                ref={imageElem}
                $error={image.error}
                $loaded={image.loaded}
                $transition={transition}
                alt={alt}
                src={image.src}
                title={title}
                height={height}
                width={width}
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
