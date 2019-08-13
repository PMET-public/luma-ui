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

export type ProductProps = Props<{
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

export const Product: Component<ProductProps> = ({ 
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
    const { colors } = useTheme()

    return (
        <Element {...props} className={classes('product', props.className)}>
            <div className="product__wrapper">
                <div className="product__images">
                    <Carousel className="product__images__carousel"
                        gap={1}
                        padding={3}
                    >
                        {images.map((image, index) => (
                            <Carousel.Item className="product__images__carousel__item" 
                                key={index}
                            >
                                <Image vignette={1} {...image} transition />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>

                <div className="product__info__wrapper">
                    <div className="product__info">
                        <header className="product__info__header">
                            {breadcrumbs && (
                                <Breadcrumbs
                                    prefix="#" 
                                    {...breadcrumbs} 
                                    className={classes('product__info__header__breadcrumbs', breadcrumbs.className)}
                                />
                            )}

                            <Element as="h2" 
                                {...title} 
                                className={classes('product__info__header__title', title.className)}
                            />

                            <Price 
                                {...price} 
                                className={classes('product__info__header__price', price.className)} 
                            /> 

                            {sku && (
                                <Element 
                                    as="span" 
                                    {...sku} 
                                    className={classes('product__info__header__sku', sku.className)}
                                />
                            )}
                        </header>

                        {swatches && swatches.map(({type, title, props}, index) => (
                            <Suspense fallback="Loading...." key={index}>
                                <div className="product__info__swatches">
                                    {title && (
                                        <Element 
                                            as="h3" 
                                            {...title}
                                            className={classes('product__info__swatches__title', title.className)}
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
                    
                        <div className="product__info__buttons">
                            {buttons.map((button, index) => (
                                <Button 
                                    {...button}
                                    className={classes('product__info__buttons__item', button.className)}
                                    key={index} 
                                />
                            ))}
                        </div> 

                        {description && (
                            <Assembler className="product__description" 
                                {...description} 
                            />
                        )}
                    </div>
                </div>
                
            </div>

            {assembler && (
                <Assembler className="product__assembler" 
                    {...assembler} 
                />
            )}          

            <style jsx global>{`
                .product {
                    display: grid;
                    grid-gap: 8rem;
                }

                .product__images__carousel {
                    & .image {
                        display: block;
                    }
                    
                    & .image, 
                    & .image__figure, 
                    & .image__wrapper,
                    & .image__img {
                        width: 100%;
                    }
                }

                .product__info__wrapper {
                    display: grid;
                    grid-auto-columns: 1fr;
                    grid-auto-rows: minmax(max-content, max-content);
                    grid-gap: 1rem;
                }

                .product__info {
                    display: grid;
                    grid-gap: 3rem;
                }

                .product__info__header {
                    display: grid;
                    grid-gap: 1.6rem;
                    grid-auto-rows: max-content;
                }

                .product__info__header__breadcrumbs {
                    font-size: 1.4rem;
                    color: ${colors.onSurface};
                }

                .product__info__header__sku {
                    font-size: 0.85em;
                    color: ${colors.onSurface};
                }

                .product__info__swatches {
                    display: grid;
                    grid-gap: 1rem;
                }

                .product__info__swatches__title {
                    font-size: 1.6rem;
                }

                .product__info__buttons {
                    display: grid;
                    grid-gap: 1rem;
                }

                .product__assembler {
                    z-index: 1;
                }

                @media(--small-screen-only) {
                    .product__wrapper {
                        display: grid;
                        grid-auto-rows: max-content;
                        grid-template-columns: 1fr;                    
                    }

                    .product__images {
                        position: sticky;
                        top: 0;
                        z-index: 0;
                    }

                    .product__images__carousel {
                        width: 100vw;
                        position: relative;
                        margin-left: -50vw;
                        left: 50%;
                    }

                    .product__info__wrapper {
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

                        padding-left: 1rem;
                        padding-right: 1rem;
                        box-shadow: 0 -0.5rem 0.3rem rgba(0, 0, 0, 0.05);
                        border-radius: 1rem 1rem 0 0;
                    }
                }

                @media(--medium-screen){
                    .product__wrapper {
                        display: grid;
                        grid-auto-rows: max-content;
                        grid-gap: 2rem;
                        grid-template-columns: 1fr 1fr;
                        padding-top: 2rem;
                    }

                    .product__images__carousel {
                        grid-gap:0.5rem;
                        grid-auto-flow: row;
                        grid-template-columns: repeat(1, 1.5fr);
                        overflow: unset;
                    }

                    .product__info {
                        background-color: ${colors.surface};
                        border-radius: 2rem;
                        color: ${colors.onSurface};
                        padding: 2rem;
                        position: sticky;
                        top: 2rem;
                    }
                }

                @media(--large-screen) {
                    .product__wrapper {
                        grid-template-columns: 1.5fr 1fr;
                    }
                    
                    .product__images__carousel {
                        grid-auto-flow: row;
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
            `}</style>
        </Element>
    )
}
