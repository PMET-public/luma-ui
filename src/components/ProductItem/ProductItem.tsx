import React from 'react'
import { Component, classes } from '../../lib'
import Image, { ImageProps } from '../Image'
import { useTheme } from '../../theme'
import Price, { PriceProps } from '../Price'

export type ProductItemProps = {
    badge?: string
    image: ImageProps
    price: PriceProps
    title: string
    colors?: string[]
}

export const ProductItem: Component<ProductItemProps> = ({ 
    as: ProductItem = 'div', 
    badge,
    colors,
    image,
    price,
    title,
    ...props
}) => {
    const theme = useTheme()
    
    return (
        <ProductItem {...props} className={classes('product-item', props.className)}>
            <Image className="product-item__image"
                height="1580"
                width="1274"
                vignette
                {...image}
            >
                 {!!colors && (
                    <ul className="product-item__details__colors">
                        {colors.map((color, index) => (
                            <li className="product-item__details__colors__item"
                                key={`color--${index}`} 
                                style={{ backgroundColor: color }}
                            ></li>
                        ))}
                    </ul> 
                 )}
                 
                <span className="product-item__details">
                    <strong className="product-item__details__title">{title}</strong>
                    
                    { !!badge && <span className="product-item__details__badge">{badge}</span> }

                    { price && <Price className="product-item__price" {...price} /> }
                </span>

            </Image>

            <style jsx global>{`
                .product-item__image {
                    position: relative;
                    line-height: 0;
                    
                    & .image__img {
                        height: 100%;
                        width: 100%;
                        min-height: 100%;
                        max-height: 90vh;
                    }
                }

                .product-item__details {
                    display: grid;
                    line-height: 1.5;
                    padding-left: 1rem;
                }

                .product-item__details__badge {
                    background-color: ${theme.colors.onPrimary.fade(0.45)};
                    color: ${theme.colors.primary.fade(0.4)};
                    font-size: 1.1rem;
                    left: 0;
                    letter-spacing: 0.1rem;
                    padding: 0.5rem 2rem;
                    position: absolute;
                    text-align: center;
                    text-transform: uppercase;
                    top: 0;
                    transform-origin: bottom left;
                    transform: rotate(90deg);
                }

                .product-item__details__colors {
                    display: grid;
                    grid-auto-flow: column;
                    margin: -0.5rem 0 0.5rem;
                }

                .product-item__details__colors__item {
                    display: inline-block;
                    height: 0.65rem;
                    width: 100%;
                }

                .product-item__details__title {
                    font-weight: 600;
                }

                .product-item__price {
                    font-size: 0.9em;
                }
            `}</style>
        </ProductItem>
    )
}
