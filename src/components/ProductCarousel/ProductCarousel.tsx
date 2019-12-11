import React, { useState, MutableRefObject, useMemo } from 'react'
import { Component } from '../../lib'
import { Root } from './ProductCarousel.styled'
import { ProductItemSkeleton } from '../ProductItem/ProductItem.skeleton'
import Carousel from '../Carousel'
import ProductItem, { ProductItemProps } from '../ProductItem'
import { useResize } from '../../hooks/useResize'

export type ProductCarouselProps = {
    loading?: boolean
    items: ProductItemProps[]
}

export const ProductCarousel: Component<ProductCarouselProps> = ({ loading, items, title, ...props }) => {
    const [scrollerRef, setScrollerRef] = useState<MutableRefObject<Element>>()
    const { breakpoints } = useResize(console.log)

    const show = useMemo(() => {
        if (breakpoints.smallOnly) return 1
        if (breakpoints.untilMedium) return 2
        if (breakpoints.untilLarge) return 3
        return 4
    }, [breakpoints])

    return items ? (
        <Root as={Carousel} scrollerRef={setScrollerRef} gap={1} padding={4} show={show} {...props}>
            {loading
                ? Array(4)
                      .fill(null)
                      .map((_, index) => <ProductItemSkeleton key={index} />)
                : items.map((item, index) => (
                      <Carousel.Item key={index}>
                          <ProductItem
                              {...item}
                              image={{
                                  ...item.image,
                                  lazy: { container: scrollerRef, ...item.image.lazy },
                              }}
                          />
                      </Carousel.Item>
                  ))}
        </Root>
    ) : null
}
