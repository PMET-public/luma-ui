import React from 'react'
import { Component, Props, Element } from '../../lib'
import defaultClasses from './Loader.css'

export type LoaderProps = Props<{ 
    classes?: typeof defaultClasses
    label: string
}>

export const Loader: Component<LoaderProps> = ({ 
    classes,
    label,
    ...props
}) => {
    const styles = { ...defaultClasses, ...classes }

    return (
        <Element {...props} className={styles.root}
            aria-label={label}
        >
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
        </Element>
    )
}
