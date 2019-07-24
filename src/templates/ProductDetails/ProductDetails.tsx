import React, { useRef } from 'react'
import { Component, classes } from '../../lib'
import Carousel from '../../components/Carousel'
import Image, { ImageProps } from '../../components/Image'
import Price, { PriceProps } from '../../components/Price'
import Container from '../../components/Container'
import Button, { ButtonProps } from '../../components/Button'
import { useResize } from '../../hooks/useResize'
import { useTheme } from '../../theme'
import ProductsCarousel, { ProductsCarouselProps } from '../../components/ProductsCarousel'
import { useScroll } from '../../hooks/useScroll'
import { useMeasure } from '../../hooks/useMeasure';

export type ProductDetailsProps = {
    category?: string
    title: string
    images: ImageProps[]
    price: PriceProps
    inStock?: string
    sku?: string
    buttons: ButtonProps[]
    related?: {
        title?: string
        content: ProductsCarouselProps
    }
}

export const ProductDetails: Component<ProductDetailsProps> = ({ 
    as: ProductDetails = Container, 
    buttons,
    category,
    images, 
    inStock,
    price,
    related,
    sku,
    title,
    ...props
}) => {    
    const { vHeight } = useResize()
    const { colors } = useTheme()
    const { scrollY } = useScroll()
    const imagesElemRef = useRef(null)
    const { height: imagesHeight } = useMeasure(imagesElemRef)

    return (
        <ProductDetails {...props} className={classes('product-details', props.className)}
            style={{ ['--vHeight' as any]: vHeight + 'px' }}
        >
            <div className="product-details__images"
                ref={imagesElemRef}
            >
                <Carousel className="product-details__images__carousel"
                    gap={1}
                    padding={4}
                >
                    {images.map((image, index) => (
                        <Carousel.Item className="product-details__images__carousel__item" 
                            key={`product-details__images__carousel__item--${index}`}
                        >
                            <Image filter="vignette" {...image} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

            <div className="product-details__info">
                <header className="product-details__info__header">
                    {category && <span className="product-details__info__header__category">{category}</span>}
                    <h2 className="product-details__info__header__title">{title}</h2>
                    <Price className="product-details__info__header__price" {...price} /> 
                </header>

                <div className="product-details__info__buttons">
                    {buttons.map((button, index) => (
                        <Button className="product-details__info__buttons__item"
                            key={`product-details__info__buttons__item--${index}`} 
                            {...button} 
                        />
                    ))}
                </div> 

                {related && (
                    <ProductsCarousel className="product-details__info__related" 
                        {...related.content} 
                    />
                )}
            </div>

            <style jsx global>{`
                html, body {
                    scroll-snap-type: y ${scrollY < imagesHeight ? 'mandatory' : 'proximity'};
                    scroll-padding: 7rem;
                }
            `}</style>

            <style jsx global>{`
                .product-details__images,
                .product-details__info {
                    scroll-snap-align: start;
                    scroll-snap-stop: normal;
                }

                .product-details {
                    display: grid;
                    grid-gap: 2rem;
                    grid-template-areas: "images" "info";
                    grid-template-rows: max-content max-content;
                }

                .product-details__images__carousel {
                    grid-area: images;
                    height: calc(var(--vHeight) - 30rem);
                    max-height: 70rem;

                    & .image, 
                    & .image__figure, 
                    & .image__wrapper,
                    & .image__img {
                        height: 100%;
                        width: 100%;
                        min-height: 100%;
                    }
                }

                .product-details__info {
                    background-color: ${colors.surface};
                    color: ${colors.onSurface};
                    display: grid;
                    grid-area: info;
                    grid-auto-columns: 1fr;
                    grid-auto-rows: minmax(max-content, max-content);
                    grid-gap: 4rem;
                    min-height: calc(var(--vHeight) - 0rem);
                    padding-top: 3rem;

                    &::before {
                        box-shadow: 0 1px 10px;
                        content: "";
                        grid-area: dividor;
                        height: 1px;
                        justify-self: center;
                        margin-top: -3rem;
                        position: absolute;
                        width: 90%;
                        z-index: -1;
                    }
                }


                .product-details__info__header {
                    display: grid;
                    grid-gap: 1rem;
                    grid-template-columns: 1fr;
                    grid-template-areas: "category" "title" "price";
                }

                .product-details-_info__header__category {
                    grid-area: category;
                }

                .product-details__info__header__title {
                    grid-area: title;
                }

                .product-details__info__buttons {
                    display: grid;
                    grid-gap: 1rem;
                }

                .product-details__info__related {
                    z-index: 1;
                }
                
            `}</style>
        </ProductDetails>
    )
}
