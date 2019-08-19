import React from 'react'
import { Component, Props, Element } from '../../lib'
import styles from './ProductCarousel.css'

import useStyles from 'isomorphic-style-loader/useStyles'

import Carousel from '../Carousel'
import ProductItem, { ProductItemProps } from '../ProductItem'

export type ProductsCarouselProps = Props<{
    title?: Props
    items: ProductItemProps[]
}>

export const ProductsCarousel: Component<ProductsCarouselProps> = ({ 
    items,
    title,
    ...props
}) => {
    useStyles(styles)
    
    return items ? (
        <Element className={styles.root} {...props}>
            { title && (
                <Element 
                    as="h3" 
                    className={styles.title} 
                    {...title} 
                />
            )}

             <Carousel 
                className={styles.carousel}
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
