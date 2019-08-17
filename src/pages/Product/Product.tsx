import React, { Suspense } from 'react'
import { Component, Element, Props } from '../../lib'
import styles from './Product.css'

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
    price,
    sku,
    swatches,
    title,
    ...props
}) => {    

    return (
        <Element className={styles.root} {...props}>
            <div className={styles.wrapper}>
                <div className={styles.images}>
                    <Carousel 
                        className={styles.carousel}
                        gap={1}
                        padding={3}
                    >
                        {images.map((image, index) => (
                            <Carousel.Item 
                                className={styles.carouselItem}
                                key={index}
                            >
                                <Image 
                                    className={styles.image}
                                    transition 
                                    vignette={1} 
                                    {...image} 
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>

                <div className={styles.infoWrapper}>
                    <div className={styles.info}>
                        <header className={styles.header}>
                            {breadcrumbs && (
                                <Breadcrumbs
                                    className={styles.breadcrumbs}
                                    prefix="#" 
                                    {...breadcrumbs} 
                                />
                            )}

                            <Element 
                                as="h2" 
                                className={styles.title}
                                {...title} 
                            />

                            <Price  
                                className={styles.price}
                                {...price} 
                            /> 

                            {sku && (
                                <Element 
                                    as="span" 
                                    className={styles.sku}
                                    {...sku}
                                />
                            )}
                        </header>

                        {swatches && swatches.map(({type, title, props}, index) => (
                            <Suspense fallback="Loading...." key={index}>
                                <div className={styles.swatches}>
                                    {title && (
                                        <Element 
                                            as="h3" 
                                            className={styles.swatchesTitle}
                                            {...title}
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
                    
                        <div className={styles.buttons}>
                            {buttons.map((button, index) => (
                                <Button 
                                    key={index} 
                                    {...button}
                                />
                            ))}
                        </div> 

                        {description && (
                            <Assembler 
                                className={styles.assembler}
                                {...description} 
                            />
                        )}
                    </div>
                </div>
                
            </div>

            {assembler && (
                <Assembler 
                    className={styles.assembler}
                    {...assembler} 
                />
            )}          
        </Element>
    )
}
