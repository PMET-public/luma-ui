import React from 'react'
import { Component, Props } from '../../lib'
import { Root, ImageWrapper, CarouselItem, Label } from './BubbleCarousel.styled'

import Carousel from '../Carousel'
import Image, { ImageProps } from '../Image'
import { BubbleCarouselSkeleton } from './BubbleCarousel.skeleton'

type Items = Array<
    Props<{
        text: string
        image: ImageProps
    }>
>

export type BubbleCarouselProps = {
    loading?: boolean
    items: Items
}

export const BubbleCarousel: Component<BubbleCarouselProps> = ({ children, loading, items, ...props }) => {
    return (
        <Root as={Carousel} gap={1.4} show="auto" padding={1.5} snap={false} hideScrollBar {...props}>
            {loading ? (
                <>
                    <CarouselItem>
                        <BubbleCarouselSkeleton style={{ width: '1em', height: 'auto' }} />
                    </CarouselItem>
                    <CarouselItem>
                        <BubbleCarouselSkeleton style={{ width: '1em', height: 'auto' }} />
                    </CarouselItem>
                    <CarouselItem>
                        <BubbleCarouselSkeleton style={{ width: '1em', height: 'auto' }} />
                    </CarouselItem>
                    <CarouselItem>
                        <BubbleCarouselSkeleton style={{ width: '1em', height: 'auto' }} />
                    </CarouselItem>
                </>
            ) : (
                items.map(({ text, image, ...item }, index) => (
                    <CarouselItem {...item} key={index}>
                        <ImageWrapper>
                            <Image alt="null" {...image} />
                        </ImageWrapper>
                        <Label>{text}</Label>
                    </CarouselItem>
                ))
            )}
        </Root>
    )
}
