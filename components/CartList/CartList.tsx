import React from 'react'
import { Component, Props } from '../../lib'
import { Root, Product, Thumbnail, DetailsWrapper, Title, Price, Quantity, Sku, Options, Option, OptionLabel, OptionValue } from './CartList.styled'
import PriceComponent, { PriceProps } from '../Price'
import Image, { ImageProps } from '../Image'
import QuantityComponent, { QuantityProps } from '../Quantity'
import { CartListSkeleton } from './CartList.skeleton'

export type CartListProps = {
    loading?: boolean
    items?: Array<{
        _id?: string | number
        title: Props<{
            text: string
        }>
        sku: string
        thumbnail: ImageProps
        quantity: QuantityProps
        price: PriceProps
        options?: Array<{
            _id?: string | number
            label: string
            value: string
        }>
    }>
}
export const CartList: Component<CartListProps> = ({ loading, items, children, ...props }) => {
    return loading ? (
        <Root {...props}>
            <CartListSkeleton />
        </Root>
    ) : (
        <Root {...props}>
            {items?.map(({ _id, title, sku, thumbnail, price, quantity, options }, index) => (
                <Product key={_id || index}>
                    <Thumbnail>
                        <Image vignette width="100%" height="auto" {...thumbnail} />
                    </Thumbnail>
                    <DetailsWrapper>
                        <Title {...title}>{title.text}</Title>

                        <Price>
                            <PriceComponent {...price} />
                        </Price>

                        <Quantity as={QuantityComponent} {...quantity} />
                        <Sku>{sku}</Sku>
                        {options && (
                            <Options>
                                {options.map(({ _id, label, value }, index) => (
                                    <Option key={_id || index}>
                                        <OptionLabel>{label}</OptionLabel> <OptionValue>{value}</OptionValue>
                                    </Option>
                                ))}
                            </Options>
                        )}
                    </DetailsWrapper>
                </Product>
            ))}

            {children}
        </Root>
    )
}
