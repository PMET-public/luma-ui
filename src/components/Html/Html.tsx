import React from 'react'
import { Component, Props, Element } from '../../lib'
import styles from './Html.css'

export type HtmlProps = Props<{
    source: string
}>

export const Html: Component<HtmlProps> = ({
    source,
    ...props
}) => {
    return source ? (
        <Element
            className={styles.root}
            {...props}
            dangerouslySetInnerHTML={{ __html: source }}
        />
    ) : null
}
