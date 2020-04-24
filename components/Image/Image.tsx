import React from 'react'
import { Component, Override } from '../../lib'
import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component'
import { EffectsStyles } from './EffectsStyles'
import { Root, Placeholder } from './Image.styled'
import { useImage, ImgSrc } from '../../hooks/useImage'

export type ImageProps = Override<
    LazyLoadImageProps,
    {
        vignette?: number
        src?: ImgSrc
    }
>

export const ImageComponent: Component<ImageProps> = ({ src: _src, vignette = 0, effect = 'blur', ...props }) => {
    const src = useImage(_src)

    return (
        <Root $vignette={vignette}>
            <LazyLoadImage
                wrapperClassName="LazyLoadImage"
                src={src}
                placeholder={
                    <Placeholder
                        aria-hidden="true"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAFCAQAAADIpIVQAAAADklEQVR42mNkgAJGIhgAALQABsHyMOcAAAAASUVORK5CYII="
                        width={props.width}
                        height={props.height}
                    />
                }
                effect={effect}
                {...props}
            />
            <EffectsStyles />
        </Root>
    )
}
