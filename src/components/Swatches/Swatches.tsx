import React from 'react'
import { Component, Props, Element, classes } from '../../lib'

export type SwatchesProps = Props<{ 
    items: Array<Props<{ 
        label: string|number 
        active?: boolean
    }>>
}>

export const Swatches: Component<SwatchesProps> = ({ 
    items = [],
    ...props
}) => {
    
    return (
        <Element {...props} className={classes('swatches', props.className)}>
            {items.map(({active = false, label, ...item}, index) => (
                <Element as="button" {...item} className={classes('swatches__item', item.className, ['--active', active])}
                    key={index}
                >
                    <span className="swatches__item__label">
                        {label}
                    </span>
                </Element>
            ))}

            <style jsx global>{`
                .swatches {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-gap: 1rem;
                }

                .swatches__item {
                    color: inherit;
                    border: 0.1rem solid currentColor;
                    border-radius: 0.5rem;
                    padding: 1rem;
                    text-align: center;

                    &.--active {
                        background-color: currentColor;
                        & > .swatches__item__label {
                            filter: invert(1);
                        } 
                    }
                }
            `}</style>
        </Element>
    )
}
