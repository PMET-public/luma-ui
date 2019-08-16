import React from 'react'
import { Component, Props, Element, classNames } from '../../lib'
import defaultClasses from './Price.css'

export type PriceProps = Props<{
    classes?: typeof defaultClasses
    currency?: string
    label?: string
    regular: number
    special?: number
}>

export const Price: Component<PriceProps> = ({
    classes,
    currency = 'USD',
    label,
    regular,
    special,
    ...props
}) => {
    const styles = { ...defaultClasses, ...classes }

    return (
        <Element 
            {...props} 
            className={styles.root}
        >
            {label && (
                <em className={styles.label}>
                    {label}
                </em>
            )}

            <span 
                className={classNames(
                    styles.regularPrice, 
                    [styles.hasSpecialPrice, !!special]
                )}
            
            >
                {regular.toLocaleString('en-US', { style: 'currency', currency })}
            </span>

            {special && (
                <span className={styles.specialPrice}>
                    {special.toLocaleString('en-US', { style: 'currency', currency })}
                </span>
            )}
        </Element>
    )
}
