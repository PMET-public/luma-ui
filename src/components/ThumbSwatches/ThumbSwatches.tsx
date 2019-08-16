import React from 'react'
import { Component, Props, Element, classNames } from '../../lib'
import defaultClasses from './ThumbSwatches.css'

import Image, { ImageProps } from '../Image'

export type ThumbSwatchesProps = Props<{
    classes?: typeof defaultClasses
    items: Array<Props<{
        active?: boolean
        disabled?: boolean
        image: ImageProps
    }>>
}>

export const ThumbSwatches: Component<ThumbSwatchesProps> = ({
    classes,
    items = [],
    title,
    ...props
}) => {
    const styles = { ...defaultClasses, ...classes }

    return (
        <Element {...props} className={styles.root}>
            {items.map(({ image, active = false, disabled = false, ...item }, index) => (
                <Element 
                    as="button" 
                    {...item} 
                    className={classNames(
                        styles.item, 
                        [styles.active, active], 
                        [styles.disabled, disabled]
                    )}
                    key={index}
                >
                    <Image
                        {...image}
                        transition
                        classes={{
                            root: styles.image,
                            image: styles.imageTag,
                        }}
                    />
                </Element>
            ))}
        </Element>
    )
}
