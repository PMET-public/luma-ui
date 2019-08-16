import React from 'react'
import { Component, Props, Element } from '../../lib'
import defaultClasses from './Html.css'

export type HtmlProps = Props<{
    classes?: typeof defaultClasses
    source: string
}>

export const Html: Component<HtmlProps> = ({
    classes,
    source,
    ...props
}) => {
    const styles = { ...defaultClasses, ...classes }

    return source ? (
        <Element {...props} className={styles.root}>
            <div dangerouslySetInnerHTML={{ __html: source }} />
        </Element>
    ) : null
}
