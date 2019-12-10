import React, { useRef } from 'react'
import { Component } from '../../lib'
import { Root, CarouselWrapper } from './ProductCarousel.styled'
import { ProductItemSkeleton } from '../ProductItem/ProductItem.skeleton'
import { Root as Carousel, Item as CarouseItem } from '../Carousel/Carousel.styled'
import ProductItem, { ProductItemProps } from '../ProductItem'

export type ProductCarouselProps = {
    loading?: boolean
    items: ProductItemProps[]
}

export const ProductCarousel: Component<ProductCarouselProps> = ({ loading, items, title, ...props }) => {
    const containerElem = useRef(null)

    return items ? (
        <Root {...props}>
            <CarouselWrapper>
                <Carousel ref={containerElem} $gap={1} $padding={4} $show={1}>
                    {loading
                        ? Array(4)
                              .fill(null)
                              .map((_, index) => <ProductItemSkeleton key={index} />)
                        : items.map((item, index) => (
                              <CarouseItem key={index}>
                                  <ProductItem
                                      {...item}
                                      image={{
                                          ...item.image,
                                          lazy: { container: containerElem, ...item.image.lazy },
                                      }}
                                  />
                              </CarouseItem>
                          ))}
                </Carousel>
            </CarouselWrapper>
        </Root>
    ) : null
}
