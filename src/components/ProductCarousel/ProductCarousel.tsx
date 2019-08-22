import React from 'react'
import { Component } from '../../lib'
import { Root, Title, CarouselWrapper } from './ProductCarousel.styled'

import Carousel from '../Carousel'
import ProductItem, { ProductItemProps } from '../ProductItem'

export type ProductCarouselProps = {
    title?: {
        text: string
    }
    items: ProductItemProps[]
}

export const ProductCarousel: Component<ProductCarouselProps> = ({ items, title, ...props }) => {
    return items ? (
        <Root {...props}>
            {title && <Title {...title}>{title.text}</Title>}

            <CarouselWrapper>
                <Carousel gap={1} padding={4}>
                    {items.map((item, index) => (
                        <Carousel.Item key={index}>
                            <ProductItem {...item} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </CarouselWrapper>
        </Root>
    ) : null
}
