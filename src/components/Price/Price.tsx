import React from 'react'
import { Component, classes } from '../../lib'

export type PriceProps = {
    price: string
    priceSpecial?: string
    priceLabel?: string
}

export const Price: Component<PriceProps> = ({ 
    as: Price = 'div', 
    price,
    priceLabel,
    priceSpecial,
    ...props
}) => {
    
    return (
        <Price {...props} className={classes('price', props.className)}>
            {!!priceLabel && <em className="price__label">{priceLabel}</em>}
            
            <span className={classes('price__original', ['--special', !!priceSpecial])}>
                {price}
            </span> 

            { !!priceSpecial && <span className="price__special">{priceSpecial}</span> }

            <style jsx global>{`
                .price {
                    display: grid;
                    grid-gap: 0.75rem;
                    grid-auto-flow: column;
                    grid-auto-columns: max-content;
                }

                .price__original {
                    &.--special {
                        text-decoration: line-through;
                    }
                }
            `}</style>
        </Price>
    )
}
