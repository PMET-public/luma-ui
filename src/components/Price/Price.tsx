import React from 'react'
import { Component, Props, Element, classes } from '../../lib'

export type PriceProps = Props<{
    currency?: string
    label?: string
    regular: number
    special?: number
}>

export const Price: Component<PriceProps> = ({
    currency = 'USD',
    label,
    regular,
    special,
    ...props
}) => {

    return (
        <Element {...props} className={classes('price', props.className)}>
            {label && <em className="price__label">{label}</em>}

            <span className={classes('price__regular', ['--special', !!special])}>
                {regular.toLocaleString('en-US', { style: 'currency', currency })}
            </span>

            {special && (
                <span className="price__special">
                    {special.toLocaleString('en-US', { style: 'currency', currency })}
                </span>
            )}

            <style jsx global>{`
                .price {
                    display: grid;
                    grid-gap: 0.75rem;
                    grid-auto-flow: column;
                    grid-auto-columns: max-content;
                }

                .price__regular {
                    &.--special {
                        text-decoration: line-through;
                    }
                }
            `}</style>
        </Element>
    )
}
