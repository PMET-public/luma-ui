import React from 'react'
import { Component, Props, Element } from '../../lib'
import styles from './BubbleCarousel.css'

import Image, { ImageProps } from '../Image'

export type BubbleCarouselProps = Props<{
    items: Array<Props<{
        text: string
        image: ImageProps
    }>>
}>

export const BubbleCarousel: Component<BubbleCarouselProps> = ({
    children,
    items,
    ...props
}) => {

    return (
        <Element className={styles.root} {...props}>
            <div className={styles.wrapper}>
                {items.map(({ text, image, ...item }, index) => (
                    <Element 
                        className={styles.item}
                        key={index}
                        {...item} 
                    >
                        <Image 
                            alt="null" 
                            className={styles.image}
                            transition 
                            {...image} 
                        />
                     
                        <Element className={styles.label}>
                            {text}
                        </Element>
                 </Element>
                ))}
            </div>
        </Element>
    )
}
