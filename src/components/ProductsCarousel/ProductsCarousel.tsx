import React from 'react'
import { Component, classes } from '../../lib'
import Carousel from '../Carousel'
import Link, { LinkRoute } from '../Link'
import ProductItem, { ProductItemProps } from '../ProductItem'
import { ReactComponentLike } from 'prop-types'

export type ProductsCarouselProps = {
    title?: string
    titleAs?: ReactComponentLike
    items: Array<{ link?: LinkRoute } & ProductItemProps>
}

export const ProductsCarousel: Component<ProductsCarouselProps> = ({ 
    as: ProductsCarousel = 'div', 
    title,
    titleAs: Title = 'h3',
    items,
    ...props
}) => {
    
    return items ? (
        <ProductsCarousel {...props} className={classes('products-carousel', props.className)}>
            { title && <Title>{title}</Title> }

             <Carousel className="products-carousel__carousel"
                gap={1}
                padding={4}
            >
                {items.map(({ link, ...item }, index) => (
                    <Carousel.Item className="products-carousel__carousel__item" 
                        key={`products-carousel__carousel__item--${index}`}
                        as={link ? Link : 'div'}
                        {...link}
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
                        --show: 2;
                    }

                    @media(--large-screen) {
                        --show: 3;
                    }
                }
            `}</style>
        </ProductsCarousel>
    ) : null
}
