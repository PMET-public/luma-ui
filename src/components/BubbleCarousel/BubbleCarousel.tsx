import React, { FunctionComponent } from 'react'
import { Root, Wrapper, ImageWrapper, Item, Label } from './BubbleCarousel.styled'

import Image, { ImageProps } from '../Image'

export type BubbleCarouselProps = {
    items: Array<{
        text: string
        image: ImageProps
    }>
}

export const BubbleCarousel: FunctionComponent<BubbleCarouselProps> = ({ children, items, ...props }) => {
    return (
        <Root {...props}>
            <Wrapper>
                {items.map(({ text, image, ...item }, index) => (
                    <Item key={index} {...item}>
                        <ImageWrapper>
                            <Image alt="null" transition {...image} />
                        </ImageWrapper>
                        <Label>{text}</Label>
                    </Item>
                ))}
            </Wrapper>
        </Root>
    )
}
