import React, { Suspense } from 'react'
import { Component, Element, Props } from '../../lib'
import defaultClasses from './Product.css'

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
    classes?: typeof defaultClasses
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
    classes,
    description,
    images, 
    price,
    sku,
    swatches,
    title,
    ...props
}) => {    
    const styles = { ...defaultClasses, ...classes }

    return (
        <Element {...props} className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.images}>
                    <Carousel 
                        classes={{
                            root: styles.carousel,
                        }}
                        gap={1}
                        padding={3}
                    >
                        {images.map((image, index) => (
                            <Carousel.Item 
                                key={index}
                                classes={{
                                    root: styles.carouselItem,
                                }}
                            >
                                <Image 
                                    vignette={1} 
                                    transition 
                                    {...image} 
                                    classes={{
                                        root: styles.image,
                                        image: styles.imageTag,
                                    }}
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
                                    prefix="#" 
                                    {...breadcrumbs} 
                                    classes={{
                                        root: styles.breadcrumbs,
                                    }}
                                />
                            )}

                            <Element as="h2" 
                                {...title} 
                                className={styles.title}
                            />

                            <Price 
                                {...price} 
                                classes={{
                                    root: styles.price,
                                }} 
                            /> 

                            {sku && (
                                <Element 
                                    as="span" 
                                    {...sku} 
                                    className={styles.sku}
                                />
                            )}
                        </header>

                        {swatches && swatches.map(({type, title, props}, index) => (
                            <Suspense fallback="Loading...." key={index}>
                                <div className={styles.swatches}>
                                    {title && (
                                        <Element 
                                            as="h3" 
                                            {...title}
                                            className={styles.swatchesTitle}
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
                                    {...button}
                                    className={'product__info__buttons__item'}
                                    key={index} 
                                />
                            ))}
                        </div> 

                        {description && (
                            <Assembler 
                                classes={{
                                    root: styles.asssembler,
                                }} 
                                {...description} 
                            />
                        )}
                    </div>
                </div>
                
            </div>

            {assembler && (
                <Assembler 
                    classes={{
                        root: styles.asssembler,
                    }} 
                    {...assembler} 
                />
            )}          
        </Element>
    )
}
