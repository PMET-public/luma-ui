import React from 'react'
import { Component, Element, Props, classes } from '../../lib'

import { useResize } from '../../hooks/useResize'
import { useTheme } from '../../theme'
// import { useScroll } from '../../hooks/useScroll'
// import { useMeasure } from '../../hooks/useMeasure'

import Carousel from '../../components/Carousel'
import Image, { ImageProps } from '../../components/Image'
import Price, { PriceProps } from '../../components/Price'
import Button, { ButtonProps } from '../../components/Button'
import Assembler, { AssemblerProps } from '../../components/Assembler'

export type ProductDetailsProps = Props<{
    assembler?: AssemblerProps
    buttons: ButtonProps[]
    category?: Props<{ label: string }>
    images: ImageProps[]
    price: PriceProps
    sku?: Props<{ label: string }>
    title: Props<{ label: string }>
}>

export const ProductDetails: Component<ProductDetailsProps> = ({ 
    assembler,
    buttons,
    category,
    images, 
    price,
    sku,
    title,
    ...props
}) => {    
    const { vHeight } = useResize()
    const { colors, margin } = useTheme()
    // const { scrollY } = useScroll()
    // const imagesElemRef = useRef(null)
    // const { height: imagesHeight } = useMeasure(imagesElemRef)

    return (
        <Element {...props} className={classes('product-details', props.className)}
            style={{ ['--vHeight' as any]: vHeight + 'px' }}
        >
            <div className="product-details__images">
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
                    {category && (
                        <Element className="product-details__info__header__category"
                            as="span" 
                        >
                            {category.label}
                        </Element>
                    )}

                    <Element className="product-details__info__header__title"
                        as="h2"
                    >
                        {title.label}
                    </Element>

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

                {assembler && (
                    <Assembler className="product-details__assembler" 
                        {...assembler} 
                    />
                )}
            </div>

            {/* <style jsx global>{`
                html, body {
                    scroll-snap-type: y mandatory;
                    scroll-padding: 7rem;
                }
            `}</style> */}

            <style jsx global>{`
                /*
                .product-details__images,
                .product-details__info {
                    scroll-snap-align: start;
                    scroll-snap-stop: always;
                }
                */

                .product-details {
                    display: grid;
                    grid-gap: 2rem;
                    grid-template-areas: "images" "info";
                    grid-template-rows: max-content max-content;

                }

                .product-details__images {
                    position: sticky;
                    top: 0;
                    z-index: 2;
                }

                .product-details__images__carousel {
                    grid-area: images;
                    width: 100vw;
                    position: relative;
                    margin-left: -50vw;
                    left: 50%;
        
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
                    z-index: 2;
                    
                   
                    width: 100vw;
                    position: relative;
                    margin-left: -50vw;
                    left: 50%;

                    padding-left: ${margin};
                    padding-right: ${margin};
                    box-shadow: 0 -0.5rem 0.3rem rgba(0, 0, 0, 0.05);
                    border-radius: 1.5rem 1.5rem 0 0;
                }


                .product-details__info__header {
                    &::before {
                        content: "";
                        width: 4rem;
                        height: 0.4rem;
                        background: currentColor;
                        border-radius: 0.5rem;
                        opacity: 0.35;
                        margin: -1rem auto 0;
                    }

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
                
            `}</style>
        </Element>
    )
}
