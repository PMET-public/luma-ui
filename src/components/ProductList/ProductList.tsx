import React from 'react'
import { Component } from '../../lib'
import { Root, ItemWrapper } from './ProductList.styled'

import ProductItem, { ProductItemProps } from '../ProductItem'

export type ProductListProps = {
    loading?: number
    items?: Array<
        {
            _id?: string | number
        } & ProductItemProps
    >
}

export const ProductList: Component<ProductListProps> = ({ items = [], loading, ...props }) => {
    return (
        <Root {...props}>
            {items.map(({ _id, ...item }, index) => (
                <ItemWrapper>
                    <ProductItem key={_id || index} {...item} />
                </ItemWrapper>
            ))}

            {!!loading &&
                new Array(loading).fill(null).map((_, index) => (
                    <ItemWrapper>
                        <ProductItem.Skeleton key={index} />
                    </ItemWrapper>
                ))}
        </Root>
    )
}
