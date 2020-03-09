import React from 'react'
import { Component } from '../../lib'
import { Root } from './ProductCarousel.styled'
import { ProductItemSkeleton } from '../ProductItem/ProductItem.skeleton'
import SlickSlider, { SlickSliderProps } from '../SlickSlider'
import ProductItem, { ProductItemProps } from '../ProductItem'

export type ProductCarouselProps = {
    loading?: boolean
    items: ProductItemProps[]
}

export const ProductCarousel: Component<ProductCarouselProps & SlickSliderProps> = ({
    loading,
    items,
    title,
    ...props
}) => {
    return items ? (
        <Root
            as={SlickSlider}
            slidesToShow={4.15}
            slidesToScroll={4.15}
            infinite={false}
            lazyLoad="progressive"
            responsive={[
                {
                    breakpoint: 1599,
                    settings: {
                        slidesToShow: 3.15,
                        slidesToScroll: 3.15,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2.15,
                        slidesToScroll: 2.15,
                    },
                },
                {
                    breakpoint: 599,
                    settings: {
                        slidesToShow: 1.15,
                        slidesToScroll: 1.15,
                    },
                },
            ]}
            {...props}
        >
            {loading
                ? Array(4)
                      .fill(null)
                      .map((_, index) => <ProductItemSkeleton key={index} />)
                : items.map((item, index) => <ProductItem key={index} {...item} image={item.image} />)}
        </Root>
    ) : null
}
