import React, { useState, useEffect } from 'react'
import { Component, Props, Element } from '../../lib'
import defaultClasses from './ViewLoader.css'

import LoaderImage from '../../../public/images/loader.svg'

export type ViewLoaderProps = Props<{ 
    classes?: typeof defaultClasses
    text?: string
}>

export const ViewLoader: Component<ViewLoaderProps> = ({
    classes,
    text = 'loading',
    ...props
}) => {
    const styles = { ...defaultClasses, ...classes }

    const [show, setShow] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 250)
        return () => clearTimeout(timer)
    }, [])
    
    return show ? (
        <Element {...props} className={styles.root}>
            <LoaderImage 
                arial-label={text} 
                className={styles.image}
            />
        </Element>
    ) : null
}
