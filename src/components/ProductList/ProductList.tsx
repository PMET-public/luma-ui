import React, { FunctionComponent } from 'react'
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

export const ProductList: FunctionComponent<ProductListProps> = ({ items = [], loading, ...props }) => {
    return (
        <Root {...props}>
            {items.map(({ _id, ...item }, index) => (
                <ItemWrapper key={_id || index}>
                    <ProductItem {...item} />
                </ItemWrapper>
            ))}

            {!!loading &&
                new Array(loading).fill(null).map((_, index) => (
                    <ItemWrapper key={index}>
                        <ProductItem.Skeleton />
                    </ItemWrapper>
                ))}
        </Root>
    )
}
