import React from 'react'
import { Component } from '../../../../lib'
import { Root, Caption } from './Image.styled'

import ImageComponent, { ImageProps as ImageComponentProps } from '../../../Image'
import Link, { LinkProps } from '../../../Link'

export type ImageProps = {
    image: ImageComponentProps
    caption?: string
    link?: LinkProps
}

export const Image: Component<ImageProps> = ({ children, caption, link, image, ...props }) => {
    return (
        <Root as={link ? p => <Link {...link} {...p} /> : 'div'} {...props}>
            <figure>
                <ImageComponent width="100%" height="700" transition {...image} />
                {caption && <Caption as="figcaption">{caption}</Caption>}
            </figure>
        </Root>
    )
}
