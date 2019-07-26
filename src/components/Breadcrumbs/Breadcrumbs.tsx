import React from 'react'
import { Component, Props, Element, classes } from '../../lib'

export type BreadcrumbsProps = Props<{ 
    dividor?: string
    prefix?: string
    items: Array<Props<{ 
        label: string 
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
            {items.map(({ label, ...item }, index) => (
                <React.Fragment>
                    <Element {...item} className={classes('breadcrumbs__item', item.className)}>
                        {prefix}{label}
                    </Element>
                    {index < items.length - 1 && dividor}
                </React.Fragment>
            ))}

            <style jsx global>{`
                .breadcrumbs {
                    display: grid;
                    grid-auto-columns: max-content;
                    grid-auto-flow: column;
                    grid-gap: 1.4rem;
                }
            `}</style>
        </Element>
    )
}
