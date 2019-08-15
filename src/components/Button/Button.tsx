import React from 'react'
import { Component, Props, Element, classes } from '../../lib'
import styles from './Button.css'

export type ButtonProps = Props<{
    fill?: boolean
    color?: 'primary' | 'secondary'
}>

export const Button: Component<ButtonProps> = ({ 
    text,
    children = text,
    color = 'primary',
    fill = false,
    ...props
}) => {    
    return  (
        <Element 
            as="button"
            {...props} 
            className={classes(styles.button, props.className, styles[color], [styles.fill, fill])}
        >
            <span className={styles.wrapper}>
                {children}
            </span>
        </Element>
    )
}
