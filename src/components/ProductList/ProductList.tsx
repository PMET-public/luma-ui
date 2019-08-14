import React from 'react'
import { Component, Props, Element, classes } from '../../lib'
import ProductItem, { ProductItemProps } from '../ProductItem'

export type ProductListProps = Props<{
    loading?: number
    items?: Array<{
        _id?: string | number
    } & ProductItemProps>
}>

export const ProductList: Component<ProductListProps> = ({ 
    items = [],
    loading,
    ...props
}) => {
    
    return (
        <Element {...props} className={classes('product-list', props.className)}>
            {items.map(({ _id, ...item}, index) => (
                <ProductItem 
                    key={_id || index} 
                    {...item} 
                    className={classes('product-list__item', item.className)}
                />
            ))}

            {!!loading && new Array(loading).fill(null).map((_, index) => (
                <ProductItem.Skeleton key={index} className={classes('product-list__item')} />
            ))}

            <style jsx global>{`
                .product-list {
                    display: grid;
                    grid-gap: 3rem 0.2rem;
                    grid-template-columns: repeat(12, 1fr);

                    @media(--large-screen) {
                        grid-gap: 3rem 0.5rem;
                    }
                }

                .product-list__item {
                    @media(--small-screen-only) {
                        grid-column-end: span 6;
                        
                        &:nth-child(3n + 1) {
                            grid-column-end: span 12;
                        }
                    }

                    @media(--medium-screen-only) {
                        grid-column-end: span 6;
                        
                        &:nth-child(3n + 1) {
                            grid-column-end: span 12;
                        }
                    }

                    @media(--large-screen-only) {
                        grid-column-end: span 4;

                        &:nth-child(5n+1),
                        &:nth-child(5n+2) {
                            grid-column-end: span 6;
                        }
                    }        

                    @media(--xlarge-screen) {
                        grid-column-end: span 3;

                        &:nth-child(7n+1),
                        &:nth-child(7n+2),
                        &:nth-child(7n+3) {
                            grid-column-end: span 4;
                        }
                       
                    }                 
                }
            `}</style>
        </Element>
    )
}
