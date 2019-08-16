import React from 'react'
import { Component, Props, Element } from '../../lib'
import defaultClasses from './BubbleCarousel.css'

import Image, { ImageProps } from '../Image'

export type BubbleCarouselProps = Props<{
    classes?: typeof defaultClasses
    items: Array<Props<{
        text: string
        image: ImageProps
    }>>
}>

export const BubbleCarousel: Component<BubbleCarouselProps> = ({
    children,
    classes,
    items,
    ...props
}) => {
    const styles = { ...defaultClasses, classes }

    return (
        <Element {...props} className={styles.root} >
            <div className={styles.wrapper}>
                {items.map(({ text, image, ...item }, index) => (
                    <Element 
                        {...item} 
                        className={styles.item}
                        key={index}
                    >
                        <Image 
                            alt="null" 
                            transition 
                            {...image} 
                            classes={{
                                root: styles.image,
                                image: styles.imageTag,
                            }}
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
