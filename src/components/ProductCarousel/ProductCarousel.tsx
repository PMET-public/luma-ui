import React from 'react'
import { Component } from '../../lib'
import { Root } from './ProductCarousel.styled'
import { ProductItemSkeleton } from '../ProductItem/ProductItem.skeleton'
import SlickSlider, { SlickSliderProps } from '../SlickSlider'
import ProductItem, { ProductItemProps } from '../ProductItem'

export type ProductCarouselProps = {
    loading?: boolean
    items: ProductItemProps[]
} & SlickSliderProps

export const ProductCarousel: Component<ProductCarouselProps> = ({ loading, items, title, ...props }) => {
    return items ? (
        <Root
            as={SlickSlider}
            slidesToShow={4.15}
            slidesToScroll={4}
            dots
            arrows
            infinite
            speed={400}
            centerMode={false}
            variableWidth={false}
            responsive={[
                {
                    breakpoint: 1599,
                    settings: {
                        slidesToShow: 3.15,
                        slidesToScroll: 3,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2.15,
                        slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 599,
                    settings: {
                        slidesToShow: 1.025,
                        slidesToScroll: 1,
                    },
                },
            ]}
            {...props}
        >
            {loading
                ? Array(4)
                      .fill(null)
                      .map((_, index) => <ProductItemSkeleton key={index} />)
                : items.map((item, index) => (
                      <ProductItem
                          key={index}
                          {...item}
                          image={{
                              ...item.image,
                              lazyload: { offsetY: 100 },
                          }}
                      />
                  ))}
        </Root>
    ) : null
}
