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

export const ProductCarousel: Component<ProductCarouselProps> = ({
    loading,
    items,
    title,
    centerMode = false,
    ...props
}) => {
    return items ? (
        <Root
            as={SlickSlider}
            dots
            arrows
            infinite
            speed={400}
            centerMode={centerMode}
            variableWidth={false}
            slidesToShow={4.15}
            slidesToScroll={centerMode ? 1 : 4}
            responsive={[
                {
                    breakpoint: 1599,
                    settings: {
                        slidesToShow: 3.15,
                        slidesToScroll: centerMode ? 1 : 3,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2.15,
                        slidesToScroll: centerMode ? 1 : 2,
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
