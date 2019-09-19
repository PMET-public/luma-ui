import React from 'react'
import { Component } from '../../lib'
import { Root, List, ItemWrapper } from './ProductList.styled'

import ProductItem, { ProductItemProps } from '../ProductItem'
import Loader, { LoaderProps } from '../Loader'

export type ProductListProps = {
    loader?: LoaderProps
    items?: Array<
        {
            _id?: string | number
        } & ProductItemProps
    >
}

export const ProductList: Component<ProductListProps> = ({ loader, items = [], ...props }) => {
    return (
        <Root {...props}>
            <List>
                {items.map(({ _id, ...item }, index) => (
                    <ItemWrapper key={_id || index}>
                        <ProductItem {...item} />
                    </ItemWrapper>
                ))}
            </List>
            {loader && <Loader {...loader} />}
        </Root>
    )
}
