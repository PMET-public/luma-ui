import React from 'react'
import { Component, Props, Element, classes } from '../../lib'
import Image, { ImageProps } from '../Image'
import Price, { PriceProps } from '../Price'

import { useTheme } from '../../theme'

export type ProductItemProps = Props<{
    badge?: Props
    colors?: Array<{ value: string }>
    image?: ImageProps
    loading?: boolean
    price?: PriceProps
    title?: Props
}>

export const ProductItem: Component<ProductItemProps> = ({
    badge,
    colors,
    image,
    loading = false,
    price,
    title,
    ...props
}) => {
    const theme = useTheme()

    return (
        <Element {...props} className={classes('product-item', props.className)}>
            {!loading && badge && (
                <Element 
                    as="span"
                    {...badge}
                    className={classes('product-item__badge', badge.className)}
                />
            )}

            <Image 
                height="1580"
                transition
                vignette={1}
                width="1274"
                {...image}
                src={!loading && image ? image.src : undefined}
                className={classes('product-item__image', image && image.className)}
            >
                {!loading && colors && (
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
                    <span className={classes('product-item__details__title', ['--loading', loading])}>
                        {!loading && title && (
                            <Element as="span" {...title} />
                        )}
                    </span>

                    <span className={classes('product-item__details__price', ['--loading', loading])}>
                        {!loading && price && (
                            <Price as="span" {...price} />
                        )}
                    </span>
                </span>
            </Image>

            <style jsx global>{`
                .product-item {
                    display: block;
                    overflow: hidden;
                    position: relative;
                }

                .product-item__badge {
                    background-color: ${theme.colors.accent.fade(0.2)};
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

                .product-item__image {
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
                    padding: 1rem 0;
                    font-size: 1.4rem;

                    @media(--medium-screen) {
                        font-size: 1.5rem;
                    }
                }

                .product-item__details__title,
                .product-item__details__price {
                    &.--loading::after {
                        animation: product-item__loading-animation 1s ease infinite;
                        background-size: 300%;
                        background: linear-gradient(-45deg, ${theme.colors.onSurface.fade(0.95)}, ${theme.colors.onSurface.fade(0.85)});
                        content: "";
                        display: inline-block;
                        height: 1em;
                    }
                }

                .product-item__details__title {
                    font-size: 1em;
                    font-weight: 600;

                    &.--loading::after {
                        width: 60%;
                    }
                }

                .product-item__details__price {
                    font-size: 0.9em;
                    &.--loading::after {
                        width: 30%;
                    }
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

                @keyframes product-item__loading-animation {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
            `}</style>
        </Element>
    )
}
