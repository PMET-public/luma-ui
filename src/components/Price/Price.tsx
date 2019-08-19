import React from 'react'
import { Component, Props, Element, classNames } from '../../lib'
import styles from './Price.css'

import useStyles from 'isomorphic-style-loader/useStyles'

export type PriceProps = Props<{
    currency?: string
    label?: string
    regular: number
    special?: number
}>

export const Price: Component<PriceProps> = ({
    currency = 'USD',
    label,
    regular,
    special,
    ...props
}) => {
    useStyles(styles)

    return (
        <Element 
            className={styles.root}
            {...props} 
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
