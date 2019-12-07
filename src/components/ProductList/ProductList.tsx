import React from 'react'
import { Component } from '../../lib'
import { Root, List, ItemWrapper } from './ProductList.styled'

import ProductItem, { ProductItemProps } from '../ProductItem'
import { ProductItemSkeleton } from '../ProductItem/ProductItem.skeleton'

export type ProductListProps = {
    loading?: boolean
    loadingMore?: boolean
    items?: Array<
        {
            _id?: string | number
        } & ProductItemProps
    >
}

export const ProductList: Component<ProductListProps> = ({ loading, loadingMore, items = [], ...props }) => {
    return (
        <Root {...props}>
            <List>
                {items.map(({ _id, ...item }, index) => (
                    <ItemWrapper key={_id || index}>
                        <ProductItem loading={loading} {...item} />
                    </ItemWrapper>
                ))}

                {loadingMore &&
                    Array(7)
                        .fill(null)
                        .map((_, index) => (
                            <ItemWrapper key={index}>
                                <ProductItemSkeleton />
                            </ItemWrapper>
                        ))}
            </List>
        </Root>
    )
}
