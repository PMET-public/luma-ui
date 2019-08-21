import React from 'react'
import { Component, Props, Element, classNames } from '../../lib'
import styles from './ThumbSwatches.css'



import Image, { ImageProps } from '../Image'

export type ThumbSwatchesProps = Props<{
    items: Array<Props<{
        active?: boolean
        disabled?: boolean
        image: ImageProps
    }>>
}>

export const ThumbSwatches: Component<ThumbSwatchesProps> = ({
    items = [],
    title,
    ...props
}) => {
   

    return (
        <Element className={styles.root} {...props}>
            {items.map(({ image, active = false, disabled = false, ...item }, index) => (
                <Element
                    as="button"
                    className={classNames(
                        styles.item,
                        [styles.active, active],
                        [styles.disabled, disabled]
                    )}
                    key={index}
                    {...item}
                >
                    <Image
                        className={styles.image}
                        transition
                        {...image}
                    />
                </Element>
            ))}
        </Element>
    )
}
