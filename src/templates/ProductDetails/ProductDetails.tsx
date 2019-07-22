import React from 'react'
import { Component, classes } from '../../lib'
import Carousel from '../../components/Carousel'
import Image, { ImageProps } from '../../components/Image'
import Price, { PriceProps } from '../../components/Price'
import Container from '../../components/Container'

export type ProductDetailsProps = {
    category?: string
    title: string
    images: ImageProps[]
    badge?: string,
    price: PriceProps
    inStock?: string
    sku?: string
}

export const ProductDetails: Component<ProductDetailsProps> = ({ 
    as: ProductDetails = 'div', 
    category,
    title,
    images, 
    badge,
    price,
    inStock,
    sku,
    ...props
}) => {
    
    return (
        <ProductDetails {...props} className={classes('product-details', props.className)}>
            <Container className="product-details__wrapper">
                <header className="product-details__header">
                    {category && <span className="product-details__header__category">{category}</span>}
                   
                    <h2 className="product-details__header__title">{title}</h2>
                   
                    {badge && (
                        <span className="product-details__header__badge">
                            {/* TO-DO: Icon?  */}
                            {badge}
                        </span>
                    )}
                </header>

                <Price className="product-details__price" {...price} />

                <Carousel className="product-details__images"
                    gap={1}
                    padding={4}
                >
                    {images.map((image, index) => (
                        <Carousel.Item className="product-details__images__item" 
                            key={`product-details__images__item--${index}`}
                        >
                            <Image vignette {...image} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>

            <style jsx global>{`
                .product-details__wrapper {
                    display: grid;
                    grid-gap: 2rem;
                    grid-auto-columns: minmax(0, 1fr);
                }

                .product-details__header {
                    display: grid;
                    grid-gap: 1rem;
                }

                .product-details__images {
                    & .image__img {
                        height: 100%;
                        width: 100%;
                        min-height: 100%;
                        max-height: 90vh;
                    }
                }
            `}</style>
        </ProductDetails>
    )
}
