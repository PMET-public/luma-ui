import React, { useRef } from 'react'
import { Component, Element, Props, classes } from '../../lib'

import { useTheme } from '../../theme'
import { useResize } from '../../hooks/useResize'
import { useScroll } from '../../hooks/useScroll'
import { useMeasure } from '../../hooks/useMeasure'

import Carousel from '../../components/Carousel'
import Image, { ImageProps } from '../../components/Image'
import Price, { PriceProps } from '../../components/Price'
import Button, { ButtonProps } from '../../components/Button'
import Assembler, { AssemblerProps } from '../../components/Assembler'
import Breadcrumbs, { BreadcrumbsProps } from '../../components/Breadcrumbs'

export type ProductDetailsProps = Props<{
    assembler?: AssemblerProps
    buttons: ButtonProps[]
    breadcrumbs?: BreadcrumbsProps
    images: ImageProps[]
    price: PriceProps
    sku?: Props<{ label: string }>
    title: Props<{ label: string }>
}>

export const ProductDetails: Component<ProductDetailsProps> = ({ 
    assembler,
    buttons,
    breadcrumbs,
    images, 
    price,
    sku,
    title,
    ...props
}) => {    
    const infoElemRef = useRef(null)
    const { colors, margin } = useTheme()
    const { vHeight } = useResize()
    const { y: infoYPosition } = useMeasure(infoElemRef)
    const { scrollY } = useScroll()

    return (
        <Element {...props} className={classes('product-details', props.className)}
            style={{ ['--vHeight' as any]:  `calc(${vHeight}px - 0rem)` }}
        >
            <div className="product-details__images">
                <Carousel className="product-details__images__carousel"
                    gap={1}
                    padding={5}
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

            <div className="product-details__info"
                ref={infoElemRef}
            >
                <div className="product-details__info__main">
                    <header className="product-details__info__main__header">
                        {breadcrumbs && <Breadcrumbs className="product-details__info__main__breadcrumbs" prefix="#" {...breadcrumbs} />}

                        <Element className="product-details__info__main__header__title"
                            as="h2"
                        >
                            {title.label}
                        </Element>

                        <Price className="product-details__info__main__header__price" {...price} /> 
                    </header>
                    
                    <div className="product-details__info__buttons">
                        {buttons.map((button, index) => (
                            <Button className="product-details__info__buttons__item"
                                key={`product-details__info__buttons__item--${index}`} 
                                {...button} 
                            />
                        ))}
                    </div> 
                </div>

                 {assembler && (
                    <Assembler className="product-details__assembler" 
                        {...assembler} 
                    />
                )}           
            </div>
    
            <style jsx global>{`
                @media(--small-screen-only) {
                    html, body {
                        scroll-snap-type: ${scrollY > infoYPosition ? 'unset' : 'y mandatory'};
                    }
                }
            `}</style>

            <style jsx global>{`
                .product-details__images__carousel {
                    & .image, 
                    & .image__figure, 
                    & .image__wrapper,
                    & .image__img {
                        width: 100%;
                    }
                }

                .product-details__info {
                    display: grid;
                    grid-auto-columns: 1fr;
                    grid-auto-rows: minmax(max-content, max-content);
                    grid-gap: 1rem;
                }

                .product-details__info__main {
                    display: grid;
                    grid-gap: 3rem;
                }

                .product-details__info__main__header {
                    display: grid;
                    grid-gap: 1rem;
                    grid-template-columns: 1fr;
                    grid-template-areas: "breadcrumbs" "title" "price";
                }

                .product-details__info__main__breadcrumbs {
                    grid-area: breadcrumbs;
                    font-size: 1.4rem;
                    opacity: 0.75;
                }

                .product-details__info__main__header__title {
                    grid-area: title;
                }

                .product-details__info__main__header__price {
                    grid-area: price;
                }

                .product-details__info__buttons {
                    display: grid;
                    grid-gap: 1rem;
                }

                @media(--small-screen-only) {
                    .app-bar,
                    .product-details__info {
                        scroll-snap-align: start;
                        scroll-snap-stop: always;
                    }
                    
                    .product-details {
                        display: grid;
                        grid-template-rows: max-content max-content;
                    }

                    .product-details__images {
                        position: sticky;
                        top: 0;
                        bottom: 0;
                        z-index: -1;
                        margin-bottom: -2rem;
                    }

                    .product-details__images__carousel {
                        width: 100vw;
                        position: relative;
                        margin-left: -50vw;
                        left: 50%;
                    }

                    .product-details__info {
                        background-color: ${colors.surface};
                        color: ${colors.onSurface};
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
                        border-radius: 1.5rem 1.5rem 0 0;
                    }

                    .product-details__info__main__header {
                        &::before {
                            background-color: currentColor;
                            border-radius: 0.5rem;
                            content: "";
                            height: 0.4rem;
                            left: 50%;
                            margin: auto;
                            opacity: 0.2;
                            position: absolute;
                            top: 15px;
                            transform: translateX(-50%);
                            width: 4rem;
                        }
                    }
                }

                @media(--medium-screen){
                    .product-details {
                        padding-top: 2rem;
                        display: grid;
                        grid-template-areas: "images info";
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: max-content max-content;
                        grid-gap: 2rem;
                    }

                    .product-details__images__carousel {
                        grid-gap:0.5rem;
                        grid-auto-flow: row;
                        grid-template-columns: repeat(1, 1.5fr);
                        overflow: unset;
                    }

                    .product-details__info {
                        position: sticky;
                        top: 2rem;
                        height: var(--vHeight);
                    }

                    .product-details__info__main {
                        padding: 2rem;
                        background-color: ${colors.surface};
                        color: ${colors.onSurface};
                        border-radius: 2rem;
                    }
                }

                @media(--large-screen) {
                    .product-details {
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
