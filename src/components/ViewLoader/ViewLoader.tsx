import React, { useState, useEffect } from 'react'
import { Component, Props, Element } from '../../lib'
import styles from './ViewLoader.css'

import useStyles from 'isomorphic-style-loader/useStyles'

import LoaderImage from '../../../public/images/loader.svg'

export type ViewLoaderProps = Props<{ 
    text?: string
}>

export const ViewLoader: Component<ViewLoaderProps> = ({
    text = 'loading',
    ...props
}) => {
    useStyles(styles)

    const [show, setShow] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 250)
        return () => clearTimeout(timer)
    }, [])
    
    return show ? (
        <Element className={styles.root} {...props}>
            <LoaderImage 
                arial-label={text} 
                className={styles.image}
            />
        </Element>
    ) : null
}
