import React from 'react'
import { Component, Props, Element, classes } from '../../lib'
import Carousel from '../Carousel'
import ProductItem, { ProductItemProps } from '../ProductItem'

export type ProductsCarouselProps = Props<{
    title?: Props<{ label: string }>
    items: ProductItemProps[]
}>

export const ProductsCarousel: Component<ProductsCarouselProps> = ({ 
    title,
    items,
    ...props
}) => {
    
    return items ? (
        <Element {...props} className={classes('products-carousel', props.className)}>
            { title && <Element as="h3" {...title}>{title.label}</Element> }

             <Carousel className="products-carousel__carousel"
                gap={1}
                padding={4}
            >
                {items.map((item, index) => (
                    <Carousel.Item className="products-carousel__carousel__item" 
                        key={index}
                    >
                        <ProductItem className="products-carousel__carousel__item__product" 
                            {...item} 
                        />
                    </Carousel.Item>
                ))}
            </Carousel>

            <style jsx global>{`
                .products-carousel {
                    display: grid;
                    grid-gap: 2rem;
                    grid-auto-columns: minmax(0, 1fr);
                    width: 100%;
                }

                .products-carousel__carousel {
                    @media(--medium-screen) { 
                        --show: 2 !important;
                    }

                    @media(--large-screen) {
                        --show: 3 !important;
                    }
                }
            `}</style>
        </Element>
    ) : null
}
