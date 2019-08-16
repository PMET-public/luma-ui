import React from 'react'
import { Component, Props, Element } from '../../lib'
import defaultClasses from './Breadcrumbs.css'

export type BreadcrumbsProps = Props<{ 
    classes?: typeof defaultClasses
    dividor?: string
    prefix?: string
    items: Array<Props<{
        _id?: string | number
    }>>
}>

export const Breadcrumbs: Component<BreadcrumbsProps> = ({ 
    classes,
    dividor = '',
    items = [],
    prefix = '',
    ...props
}) => {
    const styles = { ...defaultClasses, ...classes }

    return (
        <Element {...props} className={styles.root}>
            {items.map(({ text, _id, ...item }, index) => (
                <React.Fragment key={_id || index}>
                    <Element {...item} className={styles.item}>
                        {prefix}{text}
                    </Element>
                    {index < items.length - 1 && dividor}
                </React.Fragment>
            ))}
        </Element>
    )
}
