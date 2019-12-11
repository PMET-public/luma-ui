import React, { useState, MutableRefObject } from 'react'
import { Component, Props } from '../../lib'
import { Root, ImageWrapper, Item, Label } from './BubbleCarousel.styled'

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

    console.log(scrollerRef)

    return (
        <Root
            as={Carousel}
            scrollerRef={setScrollerRef}
            gap={0.75}
            show="auto"
            padding={1.5}
            snap={false}
            hideScrollBar
            {...props}
        >
            {loading ? (
                <div>
                    <BubbleCarouselSkeleton style={{ padding: '0 1rem' }} />
                </div>
            ) : (
                items.map(({ text, image, ...item }, index) => (
                    <Item as={Carousel.Item} key={index} {...item}>
                        <ImageWrapper>
                            <Image
                                alt="null"
                                transition
                                {...image}
                                lazy={{
                                    container: scrollerRef,
                                    ...image?.lazy,
                                }}
                            />
                        </ImageWrapper>
                        <Label>{text}</Label>
                    </Item>
                ))
            )}
        </Root>
    )
}
