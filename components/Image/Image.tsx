import React, { HTMLAttributes } from 'react'
import { Component, Override } from '../../lib'
import { LazyImageFull, ImageState, ImageProps as LazyImageProps } from 'react-lazy-images'
import { Root } from './Image.styled'
import { useImage, ImgSrc } from '../../hooks/useImage'

export type ImageProps = Override<
    LazyImageProps,
    {
        vignette?: boolean
        src?: ImgSrc
    } & HTMLAttributes<HTMLImageElement>
>

export const ImageComponent: Component<ImageProps> = ({ src: _src, vignette, width, height, ...props }) => {
    const src = useImage(_src)

    return (
        <LazyImageFull src={src || ''} {...props}>
            {({ imageProps, imageState, ref }) => (
                <Root
                    $loaded={imageState === ImageState.LoadSuccess}
                    $vignette={vignette}
                    {...imageProps}
                    src={imageState === ImageState.LoadSuccess ? src : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAFCAQAAADIpIVQAAAADklEQVR42mNkgAJGIhgAALQABsHyMOcAAAAASUVORK5CYII='}
                    ref={ref}
                    width={width}
                    height={height}
                />
            )}
        </LazyImageFull>
    )
}
