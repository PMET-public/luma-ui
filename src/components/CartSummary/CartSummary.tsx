import React from 'react'
import { Component, Props } from '../../lib'
import { Root, Title, PriceItem, Label } from './CartSummary.styled'
import Price, { PriceProps } from '../Price'

type PriceItemProps = {
    label: string
    price?: PriceProps | null
    appearance?: 'bold' | 'normal'
}

export type CartSummaryProps = {
    title: Props<{ text: string }>
    prices: PriceItemProps[]
}

export const CartSummary: Component<CartSummaryProps> = ({ title, prices, ...props }) => {
    return (
        <Root aria-label={title.text} {...props}>
            <Title {...title}>{title.text}</Title>

            {prices.map(({ label, price, appearance = 'normal' }, index) => (
                <PriceItem key={index}>
                    <Label $appearance={appearance}>{label}</Label>
                    {price ? <Price {...price} /> : '–'}
                </PriceItem>
            ))}
        </Root>
    )
}
