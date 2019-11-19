import React from 'react'
import { Component } from '../../lib'
import { Root, List, ItemWrapper } from './ProductList.styled'

import ProductItem, { ProductItemProps } from '../ProductItem'
// import Loader, { LoaderProps } from '../Loader'

export type ProductListProps = {
    loading?: number
    items?: Array<
        {
            _id?: string | number
        } & ProductItemProps
    >
}

export const ProductList: Component<ProductListProps> = ({ loading, items = [], ...props }) => {
    return (
        <Root {...props}>
            <List>
                {items.map(({ _id, ...item }, index) => (
                    <ItemWrapper key={_id || index}>
                        <ProductItem {...item} />
                    </ItemWrapper>
                ))}

                {loading
                    ? new Array(loading).fill(null).map((_, index) => (
                          <ItemWrapper key={index}>
                              <ProductItem.Skeleton />
                          </ItemWrapper>
                      ))
                    : null}
            </List>
        </Root>
    )
}
