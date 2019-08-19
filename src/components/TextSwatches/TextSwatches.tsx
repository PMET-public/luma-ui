import React from 'react'
import { Component, Props, Element, classNames } from '../../lib'
import styles from './TextSwatches.css'

import useStyles from 'isomorphic-style-loader/useStyles'

export type TextSwatchesProps = Props<{
    items: Array<Props<{
        active?: boolean
        disabled?: boolean
        text: string
    }>>
}>

export const TextSwatches: Component<TextSwatchesProps> = ({
    items = [],
    ...props
}) => {
    useStyles(styles)

    return (
        <Element className={styles.root} {...props}>
            {items.map(({ active = false, disabled = false, text, ...item }, index) => (
                <Element 
                    as="button" 
                    className={classNames(
                        styles.item, 
                        [styles.active, active], 
                        [styles.disabled, disabled]
                    )}
                    {...item}
                    key={index}
                >
                    <span className={styles.label}>
                        {text}
                    </span>
                </Element>
            ))}
        </Element>
    )
}
