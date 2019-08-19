import React from 'react'
import { Component, Props, Element, classNames } from '../../lib'
import styles from './Button.css'

import useStyles from 'isomorphic-style-loader/useStyles'

export type ButtonProps = Props<{
    color?: 'primary' | 'secondary'
    fill?: boolean
}>

export const Button: Component<ButtonProps> = ({ 
    text,
    children = text,
    color = 'primary',
    fill = false,
    ...props
}) => {    

    useStyles(styles)

    return  (
        <Element 
            as="button"
            className={classNames(
                styles.root, 
                styles[`${color}Color`], 
                [styles.fill, fill]
            )}
            {...props} 
        >
            <span className={styles.wrapper}>
                {children}
            </span>
        </Element>
    )
}
