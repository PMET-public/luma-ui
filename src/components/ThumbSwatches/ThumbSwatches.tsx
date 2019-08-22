import React, { FunctionComponent } from 'react'
import { Root, Item, ImageWrapper } from './ThumbSwatches.styled'

import Image, { ImageProps } from '../Image'

export type ThumbSwatchesProps = {
    items: Array<{
        active?: boolean
        disabled?: boolean
        image: ImageProps
    }>
}

export const ThumbSwatches: FunctionComponent<ThumbSwatchesProps> = ({ items = [], ...props }) => {
    return (
        <Root {...props}>
            {items.map(({ image, active = false, disabled = false, ...item }, index) => (
                <Item as="button" active={active} disabled={disabled} key={index} {...item}>
                    <ImageWrapper>
                        <Image transition width={4} height={5} {...image} />
                    </ImageWrapper>
                </Item>
            ))}
        </Root>
    )
}
