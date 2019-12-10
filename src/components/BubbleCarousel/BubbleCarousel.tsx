import React, { useRef } from 'react'
import { Component, Props } from '../../lib'
import { Root, Wrapper, ImageWrapper, Item, Label } from './BubbleCarousel.styled'

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
    const wrapperElem = useRef(null)

    return (
        <Root {...props}>
            <Wrapper ref={wrapperElem}>
                {loading ? (
                    <div>
                        <BubbleCarouselSkeleton style={{ padding: '0 1rem' }} />
                    </div>
                ) : (
                    items.map(({ text, image, ...item }, index) => (
                        <Item key={index} {...item}>
                            <ImageWrapper>
                                <Image
                                    alt="null"
                                    transition
                                    {...image}
                                    lazy={{
                                        container: wrapperElem,
                                        ...image?.lazy,
                                    }}
                                />
                            </ImageWrapper>
                            <Label>{text}</Label>
                        </Item>
                    ))
                )}
            </Wrapper>
        </Root>
    )
}
