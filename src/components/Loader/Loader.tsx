import React from 'react'
import { Component, Props, Element } from '../../lib'
import styles from './Loader.css'

import useStyles from 'isomorphic-style-loader/useStyles'

export type LoaderProps = Props<{ 
    label: string
}>

export const Loader: Component<LoaderProps> = ({ 
    label,
    ...props
}) => {
    useStyles(styles)
    
    return (
        <Element 
            className={styles.root}
            aria-label={label}
            {...props}
        >
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
        </Element>
    )
}
