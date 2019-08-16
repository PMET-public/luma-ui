import React from 'react'
import { Component, Props, Element } from '../../lib'
import defaultClasses from './ProductItem.css'

import Image, { ImageProps } from '../Image'
import Price, { PriceProps } from '../Price'
import ContentLoader, { IContentLoaderProps } from 'react-content-loader'

export type ProductItemProps = Props<{
    classes?: typeof defaultClasses
    badge?: Props
    colors?: Array<{ value: string }>
    image: ImageProps
    price: PriceProps
    title: Props
}>

type CompoundComponent = {
    Skeleton: Component<Props<IContentLoaderProps>>
}

export const ProductItem: Component<ProductItemProps> & CompoundComponent = ({
    badge,
    classes,
    colors,
    image,
    price,
    title,
    ...props
}) => {
    const styles = { ...defaultClasses, ...classes }

    return (
        <Element {...props} className={styles.root}>
            {badge && (
                <Element
                    as="span"
                    {...badge}
                    className={styles.badge}
                />
            )}

            <Image
                height="1580"
                transition
                vignette={1}
                width="1274"
                {...image}
                classes={{
                    root: styles.image,
                    image: styles.imageTag,
                }}
            />

            {colors && (
                <ul className={styles.colors}>
                    {colors.map(({ value }, index) => (
                        <li 
                            className={styles.color}
                            key={index}
                            style={{ backgroundColor: value }}
                        ></li>
                    ))}
                </ul>
            )}

            <span className={styles.details}>
                <Element 
                    as="span" 
                    {...title} 
                    className={styles.title}
                />

                <Price 
                    as="span" 
                    {...price} 
                    className={styles.price}
                />
            </span>
        </Element>
    )
}

ProductItem.Skeleton = (props) => {
    return (
        <ContentLoader
            height={810}
            width={600}
            primaryColor="#f3f3f3"
            secondaryColor="#e6e6e6"
            {...props}
        >
            <rect x="16" y="762" rx="4" ry="4" width="60%" height="16" />
            <rect x="16" y="787" rx="4" ry="4" width="30%" height="15" />
            <rect x="0" y="0" rx="5" ry="5" width="600" height="750" />
        </ContentLoader>
    )
}
