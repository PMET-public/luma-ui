import React from 'react'
import { Component, Props } from '../../lib'
import { Root, Image, CarouselItem, Wrapper, Label } from './BubbleCarousel.styled'

import { ImageProps } from '../Image'
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
        <Root gap={1.4} show="auto" padding={1.5} snap={false} hideScrollBar {...props}>
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
                    <CarouselItem key={index}>
                        <Wrapper {...item}>
                            <Image alt="null" {...image} />
                            <Label>{text}</Label>
                        </Wrapper>
                    </CarouselItem>
                ))
            )}
        </Root>
    )
}
