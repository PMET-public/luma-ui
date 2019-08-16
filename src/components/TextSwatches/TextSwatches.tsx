import React from 'react'
import { Component, Props, Element, classNames } from '../../lib'
import defaultClasses from './TextSwatches.css'

export type TextSwatchesProps = Props<{
    classes?: typeof defaultClasses
    items: Array<Props<{
        active?: boolean
        disabled?: boolean
        text: string
    }>>
}>

export const TextSwatches: Component<TextSwatchesProps> = ({
    classes,
    items = [],
    ...props
}) => {
    const styles = { ...defaultClasses, ...classes }

    return (
        <Element {...props} className={styles.root}>
            {items.map(({ active = false, disabled = false, text, ...item }, index) => (
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
                    <span className={styles.label}>
                        {text}
                    </span>
                </Element>
            ))}
        </Element>
    )
}
