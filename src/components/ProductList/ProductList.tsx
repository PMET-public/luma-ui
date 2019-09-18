import React from 'react'
import { Component } from '../../lib'
import { Root, ItemWrapper } from './ProductList.styled'

import ProductItem, { ProductItemProps } from '../ProductItem'

export type ProductListProps = {
    items?: Array<
        {
            _id?: string | number
        } & ProductItemProps
    >
}

export const ProductList: Component<ProductListProps> = ({ items = [], ...props }) => {
    return (
        <Root {...props}>
            {items.map(({ _id, ...item }, index) => (
                <ItemWrapper key={_id || index}>
                    <ProductItem {...item} />
                </ItemWrapper>
            ))}
        </Root>
    )
}
