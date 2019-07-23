import React from 'react'
import { Component, classes } from '../../lib'
import Image, { ImageProps } from '../Image'
import { useTheme } from '../../theme'
import Price, { PriceProps } from '../Price'

import TagIcon from '@fortawesome/fontawesome-free/svgs/solid/tags.svg'

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
                filter="vignette"
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

                    <strong className="product-item__details__title">
                        {title}
                    </strong>
                    
                    { !!badge && (
                        <span className="product-item__details__badge">
                            <TagIcon />
                            {badge}
                        </span> 
                    )}
                    
                    <span>
                        { price && <Price className="product-item__details__price" {...price} as="span" /> }
                    </span>
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

                .product-item__details__title {
                    font-weight: 600;
                }

                .product-item__details__price {
                    font-size: 0.9em;
                }

                .product-item__details__badge {
                    filter: opacity(0.65);
                    font-size: 0.8em;
                    letter-spacing: 0.05rem;
                    text-transform: uppercase;

                    & > svg {
                        vertical-align: middle;
                        fill: currentColor;
                        width: 1em;
                        margin-right: 0.75rem;
                    }
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
            `}</style>
        </ProductItem>
    )
}
