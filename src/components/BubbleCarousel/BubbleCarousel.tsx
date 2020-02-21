import React, { useState, MutableRefObject } from 'react'
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
    const [scrollerRef, setScrollerRef] = useState<MutableRefObject<Element>>()

    return (
        <Root
            as={Carousel}
            scrollerRef={setScrollerRef}
            gap={1.4}
            show="auto"
            padding={1.5}
            snap={false}
            hideScrollBar
            {...props}
        >
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
                            <Image
                                alt="null"
                                transition
                                lazy={{
                                    container: scrollerRef,
                                    offset: 40,
                                    ...image?.lazy,
                                }}
                                {...image}
                            />
                        </ImageWrapper>
                        <Label>{text}</Label>
                    </CarouselItem>
                ))
            )}
        </Root>
    )
}
