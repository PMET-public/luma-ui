import React, { Suspense } from 'react'
import { Component, Element, Props, classes } from '../../lib'

import { useTheme } from '../../theme'

import Carousel from '../../components/Carousel'
import Image, { ImageProps } from '../../components/Image'
import Price, { PriceProps } from '../../components/Price'
import Button, { ButtonProps } from '../../components/Button'
import Assembler, { AssemblerProps } from '../../components/Assembler'
import Breadcrumbs, { BreadcrumbsProps } from '../../components/Breadcrumbs'

const TextSwatches = React.lazy(() => import('../../components/TextSwatches'))
const ThumbSwatches = React.lazy(() => import('../../components/ThumbSwatches'))

export type ProductDetailsProps = Props<{
    assembler?: AssemblerProps
    breadcrumbs?: BreadcrumbsProps
    buttons: ButtonProps[]
    description?: AssemblerProps
    images: ImageProps[]
    swatches?: Array<{
        title?: Props
        type: 'text' | 'thumb'
        props: Props<any>
    }>
    price: PriceProps
    sku?: Props
    title: Props
}>

export const ProductDetails: Component<ProductDetailsProps> = ({ 
    assembler,
    breadcrumbs,
    buttons,
    description,
    images, 
    swatches,
    price,
    sku,
    title,
    ...props
}) => {    
    const { colors, margin } = useTheme()

    return (
        <Element {...props} className={classes('product-details', props.className)}>
            <div className="product-details__wrapper">
                <div className="product-details__images">
                    <Carousel className="product-details__images__carousel"
                        gap={1}
                        padding={3}
                    >
                        {images.map((image, index) => (
                            <Carousel.Item className="product-details__images__carousel__item" 
                                key={index}
                            >
                                <Image vignette={1} {...image} transition />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>

                <div className="product-details__info__wrapper">
                    <div className="product-details__info">
                        <header className="product-details__info__header">
                            {breadcrumbs && (
                                <Breadcrumbs
                                    prefix="#" 
                                    {...breadcrumbs} 
                                    className={classes('product-details__info__header__breadcrumbs', breadcrumbs.className)}
                                />
                            )}

                            <Element as="h2" 
                                {...title} 
                                className={classes('product-details__info__header__title', title.className)}
                            />

                            <Price 
                                {...price} 
                                className={classes('product-details__info__header__price', price.className)} 
                            /> 

                            {sku && (
                                <Element 
                                    as="span" 
                                    {...sku} 
                                    className={classes('product-details__info__header__sku', sku.className)}
                                />
                            )}
                        </header>

                        {swatches && swatches.map(({type, title, props}, index) => (
                            <Suspense fallback="Loading...." key={index}>
                                <div className="product-details__info__swatches">
                                    {title && (
                                        <Element 
                                            as="h3" 
                                            {...title}
                                            className={classes('product-details__info__swatches__title', title.className)}
                                        />
                                    )}
                                    
                                    {type === 'text' && (
                                        <TextSwatches {...props} />
                                    )}

                                    {type === 'thumb' && (
                                        <ThumbSwatches {...props} />
                                    )}
                                
                                </div> 
                            </Suspense>
                        ))}
                    
                        <div className="product-details__info__buttons">
                            {buttons.map((button, index) => (
                                <Button 
                                    {...button}
                                    className={classes('product-details__info__buttons__item', button.className)}
                                    key={index} 
                                />
                            ))}
                        </div> 

                        {description && (
                            <Assembler className="product-details__description" 
                                {...description} 
                            />
                        )}
                    </div>
                </div>
                
            </div>

            {assembler && (
                <Assembler className="product-details__assembler" 
                    {...assembler} 
                />
            )}          

            <style jsx global>{`
                .product-details {
                    display: grid;
                    grid-gap: 8rem;
                }

                .product-details__images__carousel {
                    & .image, 
                    & .image__figure, 
                    & .image__wrapper,
                    & .image__img {
                        width: 100%;
                    }
                }

                .product-details__info__wrapper {
                    display: grid;
                    grid-auto-columns: 1fr;
                    grid-auto-rows: minmax(max-content, max-content);
                    grid-gap: 1rem;
                }

                .product-details__info {
                    display: grid;
                    grid-gap: 3rem;
                }

                .product-details__info__header {
                    display: grid;
                    grid-gap: 1.6rem;
                    grid-auto-rows: max-content;
                }

                .product-details__info__header__breadcrumbs {
                    font-size: 1.4rem;
                    color: ${colors.onSurface.fade(0.4)};
                }

                .product-details__info__header__sku {
                    font-size: 0.85em;
                    color: ${colors.onSurface.fade(0.4)};
                }

                .product-details__info__swatches {
                    display: grid;
                    grid-gap: 1rem;
                }

                .product-details__info__swatches__title {
                    font-size: 1.6rem;
                }

                .product-details__info__buttons {
                    display: grid;
                    grid-gap: 1rem;
                }

                .product-details__assembler {
                    z-index: 1;
                }

                @media(--small-screen-only) {
                    .product-details__wrapper {
                        display: grid;
                        grid-auto-rows: max-content;
                        grid-template-columns: 1fr;                    
                    }

                    .product-details__images {
                        position: sticky;
                        top: 0;
                        z-index: 0;
                    }

                    .product-details__images__carousel {
                        width: 100vw;
                        position: relative;
                        margin-left: -50vw;
                        left: 50%;
                    }

                    .product-details__info__wrapper {
                        background-color: ${colors.surface};
                        color: ${colors.onSurface};
                        margin-top: -2rem;
                        padding-top: 3rem;
                        z-index: 1;

                        /**
                            Needed to fix this Safari bug
                            https://css-tricks.com/forums/topic/safari-for-ios-z-index-ordering-bug-while-scrolling-a-page-with-a-fixed-element/
                        */
                        -webkit-transform: translate3d(0,0,0);
                        
                    
                        width: 100vw;
                        position: relative;
                        margin-left: -50vw;
                        left: 50%;

                        padding-left: ${margin};
                        padding-right: ${margin};
                        box-shadow: 0 -0.5rem 0.3rem rgba(0, 0, 0, 0.05);
                        border-radius: 1rem 1rem 0 0;
                    }
                }

                @media(--medium-screen){
                    .product-details__wrapper {
                        display: grid;
                        grid-auto-rows: max-content;
                        grid-gap: 2rem;
                        grid-template-columns: 1fr 1fr;
                        padding-top: 2rem;
                    }

                    .product-details__images__carousel {
                        grid-gap:0.5rem;
                        grid-auto-flow: row;
                        grid-template-columns: repeat(1, 1.5fr);
                        overflow: unset;
                    }

                    .product-details__info {
                        background-color: ${colors.surface};
                        border-radius: 2rem;
                        color: ${colors.onSurface};
                        padding: 2rem;
                        position: sticky;
                        top: 2rem;
                    }
                }

                @media(--large-screen) {
                    .product-details__wrapper {
                        grid-template-columns: 1.5fr 1fr;
                    }
                    
                    .product-details__images__carousel {
                        grid-auto-flow: row;
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
            `}</style>
        </Element>
    )
}
