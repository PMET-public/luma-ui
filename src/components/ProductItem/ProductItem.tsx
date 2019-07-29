import React from 'react'
import { Component, Props, Element, classes } from '../../lib'
import Image, { ImageProps } from '../Image'
import { useTheme } from '../../theme'
import Price, { PriceProps } from '../Price'

export type ProductItemProps = Props<{
    badge?: Props<{ label: string }>
    image: ImageProps
    price: PriceProps
    title: Props<{ label: string }>
    colors?: Array<Props<{ value: string }>>
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
            {!!badge && (
                <Element className="product-item__badge"
                    as="span"
                    {...badge}
                >
                    {badge.label}
                </Element>
            )}

            <Image className="product-item__image"
                height="1580"
                width="1274"
                filter="vignette"
                {...image}
            >

                <span className="product-item__details">
                    <Element className="product-item__details__title"
                        as="span"
                        {...title}
                    >
                        {title.label}
                    </Element>

                    <span>
                        {price && <Price className="product-item__details__price" as="span" {...price} />}
                    </span>
                </span>

                {!!colors && (
                    <ul className="product-item__colors">
                        {colors.map(({ value }, index) => (
                            <li className="product-item__colors__item"
                                key={`color--${index}`}
                                style={{ backgroundColor: value }}
                            ></li>
                        ))}
                    </ul>
                )}
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
                    font-size: 0.8em;
                    letter-spacing: 0.05rem;
                    padding: 0.5rem 0.75rem;
                    position: absolute;
                    text-transform: uppercase;
                    top: 2rem;
                    left: 2rem;
                }

                .product-item__image {
                    position: relative;
                    line-height: 0;
                    
                    & .image__img {
                        height: 100%;
                        width: 100%;
                        min-height: 100%;
                        max-height: 90vh;
                    }
                    
                    & .image__caption {
                        background-color: ${theme.colors.surface.fade(0.05)};
                        bottom: 0;
                        color: ${theme.colors.onSurface};
                        position: absolute;
                        width: 100%;
                    }
                }

                .product-item__details {
                    display: grid;
                    line-height: 1.5;
                    padding: 0.5rem 2rem;
                }

                .product-item__details__title {
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
