import React from 'react'
import { Component, Props, Element } from '../../lib'
import styles from './Loader.css'



export type LoaderProps = Props<{ 
    label: string
}>

export const Loader: Component<LoaderProps> = ({ 
    label,
    ...props
}) => {
   
    
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
