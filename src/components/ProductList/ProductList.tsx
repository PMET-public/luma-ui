import React from 'react'
import { Component, Props, Element } from '../../lib'
import defaultClasses from './ProductList.css'

import ProductItem, { ProductItemProps } from '../ProductItem'

export type ProductListProps = Props<{
    classes?: typeof defaultClasses
    loading?: number
    items?: Array<{
        _id?: string | number
    } & ProductItemProps>
}>

export const ProductList: Component<ProductListProps> = ({ 
    classes,
    items = [],
    loading,
    ...props
}) => {
    const styles = { ...defaultClasses, ...classes }
    
    return (
        <Element {...props} className={styles.root}>
            {items.map(({ _id, ...item}, index) => (
                <ProductItem 
                    key={_id || index} 
                    {...item} 
                    classes={{
                        root: styles.item,
                    }}
                />
            ))}

            {!!loading && new Array(loading).fill(null).map((_, index) => (
                <ProductItem.Skeleton key={index} className={styles.item} />
            ))}
        </Element>
    )
}
