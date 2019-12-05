import React from 'react'
import { Component, Props } from '../../lib'
import { Root, Wrapper, ImageWrapper, Item, Label } from './BubbleCarousel.styled'

import Image, { ImageProps } from '../Image'
import { BubbleCarouselSkeleton } from './BubbleCarouselSkeleton'

export type BubbleCarouselProps = {
    items?: Array<
        Props<{
            text: string
            image: ImageProps
        }>
    >
}

export const BubbleCarousel: Component<BubbleCarouselProps> = ({ children, items, ...props }) => {
    return (
        <Root {...props}>
            <Wrapper>
                {items
                    ? items.map(({ text, image, ...item }, index) => (
                          <Item key={index} {...item}>
                              <ImageWrapper>
                                  <Image alt="null" transition {...image} />
                              </ImageWrapper>
                              <Label>{text}</Label>
                          </Item>
                      ))
                    : new Array(4).fill(null).map((_, index) => (
                          <Item key={index}>
                              <BubbleCarouselSkeleton />
                          </Item>
                      ))}
            </Wrapper>
        </Root>
    )
}
