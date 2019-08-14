import React from 'react'
import { Component, Props, Element, classes } from '../../lib'
import Image, { ImageProps } from '../Image'
import Price, { PriceProps } from '../Price'
import Skeleton from '../Skeleton'

import { useTheme } from '../../theme'

export type ProductItemProps = Props<{
    badge?: Props
    colors?: Array<{ value: string }>
    image?: ImageProps
    price?: PriceProps
    title?: Props
}>

export const ProductItem: Component<ProductItemProps> = ({
    badge,
    colors,
    image,
    price,
    title,
    ...props
}) => {
    const theme = useTheme()

    return (
        <Element {...props} className={classes('product-item', props.className)}>
            {badge && (
                <Element 
                    as="span"
                    {...badge}
                    className={classes('product-item__badge', badge.className)}
                />
            )}

            <Skeleton image={{ height: 1580, width: 1274 }}>
                {image && (
                    <Image 
                        height="1580"
                        transition
                        vignette={1}
                        width="1274"
                        {...image}
                        className={classes('product-item__image', image && image.className)}
                    />
                )}
            </Skeleton>
                
            {colors && (
                <ul className="product-item__colors">
                    {colors.map(({ value }, index) => (
                        <li className="product-item__colors__item"
                            key={index}
                            style={{ backgroundColor: value }}
                        ></li>
                    ))}
                </ul>
            )}

            <span className="product-item__details">
                <span className={classes('product-item__details__title')}>
                    <Skeleton width="60%">
                        {title && <Element as="span" {...title} />}
                    </Skeleton>
                </span>

                <span className={classes('product-item__details__price')}>
                    <Skeleton width="30%">
                        {price && <Price as="span" {...price} />}
                    </Skeleton>
                </span>
            </span>

            <style jsx global>{`
                .product-item {
                    display: block;
                    overflow: hidden;
                    position: relative;
                }

                .product-item__badge {
                    background-color: ${theme.colors.accent};
                    color: ${theme.colors.onAccent};
                    font-size: 1.4rem;
                    left: 2rem;
                    letter-spacing: 0.05rem;
                    padding: 0.5rem 0.75rem;
                    position: absolute;
                    text-transform: uppercase;
                    top: 2rem;
                    z-index: 1;
                }

                .product-item__image.image {
                    display: block;
                    position: relative;
                    
                    & .image__img {
                        height: 100%;
                        width: 100%;
                        min-height: 100%;
                        max-height: 90vh;
                    }
                    
                    & .image__caption {
                        background-color: ${theme.colors.surface};
                        color: ${theme.colors.onSurface};
                        width: 100%;
                    }
                }

                .product-item__details {
                    display: grid;
                    grid-gap: 0.75rem;
                    padding: 1rem;
                    font-size: 1.4rem;

                    @media(--medium-screen) {
                        font-size: 1.6rem;
                    }
                }

                .product-item__details__title {
                    font-size: 1em;
                    font-weight: 600;
                }

                .product-item__details__price {
                    font-size: 0.9em;
                }

                .product-item__colors {
                    display: grid;
                    grid-auto-flow: column;
                }

                .product-item__colors__item {
                    display: inline-block;
                    height: 0.65rem;
                    width: 100%;
                }
            `}</style>
        </Element>
    )
}
