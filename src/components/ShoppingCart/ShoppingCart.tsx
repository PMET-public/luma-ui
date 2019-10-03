import React from 'react'
import { Component, Props } from '../../lib'
import {
    Root,
    Product,
    Thumbnail,
    DetailsWrapper,
    Title,
    Price,
    Sku,
    Options,
    Option,
    OptionLabel,
    OptionValue,
    Actions,
    ActionQuantity,
} from './ShoppingCart.styled'
import PriceComponent, { PriceProps } from '../Price'
import Image, { ImageProps } from '../Image'
import Quantity, { QuantityProps } from '../Quantity'

export type ShoppingCartProps = {
    items: Array<{
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

export const ShoppingCart: Component<ShoppingCartProps> = ({ items, ...props }) => {
    return items ? (
        <Root {...props}>
            {items.map(({ _id, title, sku, thumbnail, price, quantity, options, onUpdate, onRemove }, index) => (
                <Product key={_id || index}>
                    <Thumbnail>
                        <Image vignette={8} transition width="100%" height="auto" {...thumbnail} />
                    </Thumbnail>
                    <DetailsWrapper>
                        <Title {...title}>{title.text}</Title>
                        <Price>
                            <PriceComponent {...price} />
                        </Price>
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
                        <Actions>
                            <ActionQuantity>
                                <Quantity {...quantity} />
                            </ActionQuantity>
                        </Actions>
                    </DetailsWrapper>
                </Product>
            ))}
        </Root>
    ) : null
}
