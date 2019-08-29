import React from 'react'
import { Component, Props } from '../../lib'
import { Root, Item, ImageWrapper } from './ThumbSwatches.styled'

import Image, { ImageProps } from '../Image'

export type ThumbSwatchesProps = {
    items: Array<
        Props<{
            active?: boolean
            disabled?: boolean
            image: ImageProps
        }>
    >
}

export const ThumbSwatches: Component<ThumbSwatchesProps> = ({ items = [], ...props }) => {
    return (
        <Root {...props}>
            {items.map(({ image, active = false, disabled = false, ...item }, index) => (
                <Item $active={active} as="button" disabled={disabled} key={index} {...item}>
                    <ImageWrapper>
                        <Image transition width={4} height={5} {...image} />
                    </ImageWrapper>
                </Item>
            ))}
        </Root>
    )
}
