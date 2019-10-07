import React from 'react'
import { Component, Props } from '../../lib'
import { Root, Title, PriceItem, Label, Buttons } from './CartSummary.styled'
import Price, { PriceProps } from '../Price'
import Button, { ButtonProps } from '../Button'

type PriceItemProps = {
    label: string
    price: PriceProps
    appearance?: 'bold' | 'normal'
}

export type CartSummaryProps = {
    title: Props<{ text: string }>
    prices: PriceItemProps[]
    buttons: ButtonProps[]
}

export const CartSummary: Component<CartSummaryProps> = ({ title, prices, buttons, ...props }) => {
    return (
        <Root aria-label={title.text} {...props}>
            <Title {...title}>{title.text}</Title>

            {prices.map((price, index) => (
                <PriceItem key={index}>
                    <Label $appearance={price.appearance || 'normal'}>{price.label}</Label>
                    <Price {...price.price} />
                </PriceItem>
            ))}

            <Buttons>{buttons && buttons.map((button, index) => <Button key={index} {...button} />)}</Buttons>
        </Root>
    )
}
