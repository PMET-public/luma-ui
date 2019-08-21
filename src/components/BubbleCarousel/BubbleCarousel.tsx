import React from 'react'
import { Component } from '../../lib'
import { Root, Wrapper, Item, Image, Label } from './BubbleCarousel.styled'

import { ImageProps } from '../Image'

export type BubbleCarouselProps = {
    items: Array<{
        text: string
        image: ImageProps
    }>
}

export const BubbleCarousel: Component<BubbleCarouselProps> = ({ children, items, ...props }) => {
    return (
        <Root {...props}>
            <Wrapper>
                {items.map(({ text, image, ...item }, index) => (
                    <Item key={index} {...item}>
                        <Image alt="null" transition {...image} />
                        <Label>{text}</Label>
                    </Item>
                ))}
            </Wrapper>
        </Root>
    )
}
