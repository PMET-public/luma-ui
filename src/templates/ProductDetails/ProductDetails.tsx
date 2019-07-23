import React from 'react'
import { Component, classes } from '../../lib'
import Carousel from '../../components/Carousel'
import Image, { ImageProps } from '../../components/Image'
import Price, { PriceProps } from '../../components/Price'
import Container from '../../components/Container'
import Button, { ButtonProps } from '../../components/Button'
import { useResize } from '../../hooks/useResize'
import { useTheme } from '../../theme'

import TagIcon from '@fortawesome/fontawesome-free/svgs/solid/tags.svg'

export type ProductDetailsProps = {
    category?: string
    title: string
    images: ImageProps[]
    badge?: string,
    price: PriceProps
    inStock?: string
    sku?: string
    buttons: ButtonProps[]
}

export const ProductDetails: Component<ProductDetailsProps> = ({ 
    as: ProductDetails = Container, 
    buttons,
    category,
    title,
    images, 
    badge,
    price,
    inStock,
    sku,
    ...props
}) => {    
    const { vHeight } = useResize()
    const { colors } = useTheme()

    return (
        <ProductDetails {...props} className={classes('product-details', props.className)}
            style={{ ['--vHeight' as any]: vHeight + 'px' }}
        >

            <Carousel className="product-details__images"
                gap={1}
                padding={4}
            >
                {images.map((image, index) => (
                    <Carousel.Item className="product-details__images__item" 
                        key={`product-details__images__item--${index}`}
                    >
                        <Image filter="vignette" {...image} />
                    </Carousel.Item>
                ))}
            </Carousel>

            <div className="product-details__info">
                <header className="product-details__info__header">
                    {category && <span className="product-details__info__header__category">{category}</span>}
                
                    <h2 className="product-details__info__header__title">{title}</h2>
                
                    {badge && (
                        <span className="product-details__info__header__badge">
                            <TagIcon />
                            {badge}
                        </span>
                    )}
                </header>

                <Price className="product-details__info__price" {...price} /> 

                <div className="product-details__info__buttons">
                    {buttons.map((button, index) => (
                        <Button className="product-details__info__buttons__item"
                            key={`product-details__info__buttons__item--${index}`} 
                            {...button} 
                        />
                    ))}
                </div> 
            </div>

            <style jsx global>{`
                html, body {
                    scroll-snap-type: y mandatory;
                    scroll-padding: 7rem;
                }

                .product-details__images,
                .product-details__info {
                    scroll-snap-align: start;
                    scroll-snap-stop: normal;
                }

                .product-details {
                    display: grid;
                    grid-gap: 2rem;
                    grid-template-areas: "images" "info";
                    grid-template-rows: minmax(20rem, 56rem) calc(var(--vHeight) - 0rem);
                }

                .product-details__images {
                    grid-area: images;

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
                    grid-area: info;
                    display: grid;
                    grid-gap: 2rem;
                    grid-auto-rows: minmax(max-content, max-content);

                    &::before {
                        box-shadow: 0 1px 10px;
                        content: "";
                        height: 1px;
                        justify-self: center;
                        position: relative;
                        width: 90%;
                        z-index: -1;
                    }
                }


                .product-details__info__header {
                    display: grid;
                    grid-gap: 1rem;
                }


                .product-details__info__header__badge {
                    filter: opacity(0.65);
                    font-size: 1.4rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05rem;

                    & > svg {
                        vertical-align: middle;
                        fill: currentColor;
                        width: 1em;
                        margin-right: 0.75rem;
                    }
                }

                .product-details__info__buttons {
                    display: grid;
                    grid-gap: 1rem;
                }
                
            `}</style>
        </ProductDetails>
    )
}
