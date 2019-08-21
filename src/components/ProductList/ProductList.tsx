import React from 'react'
import { Component, Props, Element } from '../../lib'
import styles from './ProductList.css'



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
        <Element className={styles.root} {...props}>
            {items.map(({ _id, ...item}, index) => (
                <ProductItem 
                    className={styles.item}
                    key={_id || index} 
                    {...item} 
                />
            ))}

            {!!loading && new Array(loading).fill(null).map((_, index) => (
                <ProductItem.Skeleton key={index} className={styles.item} />
            ))}
        </Element>
    )
}
