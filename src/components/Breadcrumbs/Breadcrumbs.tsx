import React from 'react'
import { Component, Props, Element, classes } from '../../lib'

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
        <Element {...props} className={classes('breadcrumbs', props.className)}>
            {items.map(({ text, _id, ...item }, index) => (
                <React.Fragment key={_id || index}>
                    <Element {...item} className={classes('breadcrumbs__item', item.className)}>
                        {prefix}{text}
                    </Element>
                    {index < items.length - 1 && dividor}
                </React.Fragment>
            ))}

            <style jsx global>{`
                .breadcrumbs {
                    display: grid;
                    grid-auto-columns: max-content;
                    grid-auto-flow: column;
                    grid-gap: 0.7em;
                }
            `}</style>
        </Element>
    )
}
