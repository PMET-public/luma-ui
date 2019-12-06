import React from 'react'
import { Component, Props } from '../../lib'
import { Root, Wrapper, ImageWrapper, Item, Label } from './BubbleCarousel.styled'

import Image, { ImageProps } from '../Image'
import { BubbleCarouselSkeleton } from './BubbleCarouselSkeleton'

type Items = Array<
    Props<{
        text: string
        image: ImageProps
    }>
>

export type BubbleCarouselProps = {
    loading?: boolean
    items?: Items
}

export const BubbleCarousel: Component<BubbleCarouselProps> = ({ children, loading, items, ...props }) => {
    /** Skeleton */
    if (loading) {
        return (
            <>
                {new Array(4).fill(null).map((_, index) => (
                    <Item key={index}>
                        <BubbleCarouselSkeleton />
                    </Item>
                ))}
            </>
        )
    }

    return items ? (
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
    ) : null
}
