import React from 'react'
import { Component, Props } from '../../lib'
import {
    Root,
    Product,
    Thumbnail,
    DetailsWrapper,
    Title,
    Sku,
    Note,
    Options,
    Option,
    OptionLabel,
    OptionValue,
    Actions,
    ActionQuantity,
    ActionRemove,
} from './ShoppingCart.styled'
import Price, { PriceProps } from '../Price'
import Image, { ImageProps } from '../Image'

import RemoveIconSvg from 'remixicon/icons/System/delete-bin-2-line.svg'

export type ShoppingCartProps = {
    items: Array<{
        _id?: string | number
        title: Props<{
            text: string
        }>
        sku: string
        thumbnail: ImageProps
        quantity: number
        price: PriceProps
        options?: Array<{
            _id?: string | number
            label: string
            value: string
        }>
        note?: string
    }>

    removeButton: Props<{
        label: string
    }>
}

export const ShoppingCart: Component<ShoppingCartProps> = ({ items, removeButton, ...props }) => {
    return items ? (
        <Root {...props}>
            {items.map(({ _id, title, sku, thumbnail, price, quantity, note, options }, index) => (
                <Product key={_id || index}>
                    <Thumbnail>
                        <Image vignette={8} transition width="100%" height="auto" {...thumbnail} />
                    </Thumbnail>
                    <DetailsWrapper>
                        <Title {...title}>{title.text}</Title>
                        <Price {...price} />
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
                        {note && <Note>{note}</Note>}
                        <Actions>
                            <ActionQuantity>{quantity}</ActionQuantity>
                            <ActionRemove {...removeButton}>
                                <RemoveIconSvg />
                            </ActionRemove>
                        </Actions>
                    </DetailsWrapper>
                </Product>
            ))}
        </Root>
    ) : null
}
