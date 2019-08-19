import React from 'react'
import { Component, Props, Element } from '../../lib'
import styles from './Html.css'

import useStyles from 'isomorphic-style-loader/useStyles'

export type HtmlProps = Props<{
    source: string
}>

export const Html: Component<HtmlProps> = ({
    source,
    ...props
}) => {
    useStyles(styles)
    
    return source ? (
        <Element
            className={styles.root}
            {...props}
            dangerouslySetInnerHTML={{ __html: source }}
        />
    ) : null
}
