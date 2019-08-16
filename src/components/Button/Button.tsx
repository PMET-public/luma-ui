import React from 'react'
import { Component, Props, Element, classNames } from '../../lib'
import defaultClasses from './Button.css'

export type ButtonProps = Props<{
    classes?: typeof defaultClasses
    color?: 'primary' | 'secondary'
    fill?: boolean
}>

export const Button: Component<ButtonProps> = ({ 
    text,
    children = text,
    classes,
    color = 'primary',
    fill = false,
    ...props
}) => {    
    const styles = { ...defaultClasses, ...classes }

    return  (
        <Element 
            as="button"
            {...props} 
            className={classNames(
                styles.root, 
                styles[`${color}Color`], 
                [styles.fill, fill]
            )}
        >
            <span className={styles.wrapper}>
                {children}
            </span>
        </Element>
    )
}
