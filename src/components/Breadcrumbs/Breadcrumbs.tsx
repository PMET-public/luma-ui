import React from 'react'
import { Component, Props, Element } from '../../lib'
import styles from './Breadcrumbs.css'

export type BreadcrumbsProps = Props<{ 
    dividor?: string
    prefix?: string
    items: Array<Props<{
        _id?: string | number
    }>>
}>

export const Breadcrumbs: Component<BreadcrumbsProps> = ({ 
    dividor = '',
    items = [],
    prefix = '',
    ...props
}) => {

    return (
        <Element className={styles.root} {...props}>
            {items.map(({ text, _id, ...item }, index) => (
                <React.Fragment key={_id || index}>
                    <Element className={styles.item} {...item}>
                        {prefix}{text}
                    </Element>
                    {index < items.length - 1 && dividor}
                </React.Fragment>
            ))}
        </Element>
    )
}
