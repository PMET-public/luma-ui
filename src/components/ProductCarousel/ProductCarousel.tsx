import React from 'react'
import { Component } from '../../lib'
import { Root, CarouselWrapper } from './ProductCarousel.styled'
import { ProductItemSkeleton } from '../ProductItem/ProductItem.skeleton'
import Carousel from '../Carousel'
import ProductItem, { ProductItemProps } from '../ProductItem'

export type ProductCarouselProps = {
    loading?: boolean
    items: ProductItemProps[]
}

export const ProductCarousel: Component<ProductCarouselProps> = ({ loading, items, title, ...props }) => {
    return items ? (
        <Root {...props}>
            <CarouselWrapper>
                <Carousel gap={1} padding={4}>
                    {loading
                        ? Array(4)
                              .fill(null)
                              .map((_, index) => <ProductItemSkeleton key={index} />)
                        : items.map((item, index) => (
                              <Carousel.Item key={index}>
                                  <ProductItem {...item} />
                              </Carousel.Item>
                          ))}
                </Carousel>
            </CarouselWrapper>
        </Root>
    ) : null
}
