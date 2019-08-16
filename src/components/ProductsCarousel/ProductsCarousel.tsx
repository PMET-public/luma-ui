import React from 'react'
import { Component, Props, Element } from '../../lib'
import defaultClasses from './ProductCarousel.css'

import Carousel from '../Carousel'
import ProductItem, { ProductItemProps } from '../ProductItem'

export type ProductsCarouselProps = Props<{
    classes?: typeof defaultClasses
    title?: Props
    items: ProductItemProps[]
}>

export const ProductsCarousel: Component<ProductsCarouselProps> = ({ 
    classes,
    items,
    title,
    ...props
}) => {
    const styles = { ...defaultClasses, ...classes }
    
    return items ? (
        <Element {...props} className={styles.root}>
            { title && (
                <Element 
                    as="h3" 
                    {...title} 
                    className={styles.title} 
                />
            )}

             <Carousel 
                classes={{
                    root: styles.carousel,
                }}
                gap={1}
                padding={4}
            >
                {items.map((item, index) => (
                    <Carousel.Item key={index}>
                        <ProductItem {...item} />
                    </Carousel.Item>
                ))}
            </Carousel>
        </Element>
    ) : null
}
