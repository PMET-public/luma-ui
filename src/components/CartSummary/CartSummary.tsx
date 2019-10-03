import React from 'react'
import { Component, Props } from '../../lib'
import { Root, Title, PriceItem, Label, Buttons } from './CartSummary.styled'
import Price, { PriceProps } from '../Price'
import Button, { ButtonProps } from '../Button'

type PriceItemProps = {
    label: string
    price: PriceProps
}

export type CartSummaryProps = {
    title: Props<{ text: string }>
    subTotal?: PriceItemProps
    taxes?: PriceItemProps
    total: PriceItemProps
    buttons: ButtonProps[]
}

export const CartSummary: Component<CartSummaryProps> = ({ title, subTotal, taxes, total, buttons, ...props }) => {
    return (
        <Root aria-label={title.text} {...props}>
            <Title {...title}>{title.text}</Title>
            {subTotal && (
                <PriceItem>
                    <Label>{subTotal.label}</Label>
                    <Price {...subTotal.price} />
                </PriceItem>
            )}
            {taxes && (
                <PriceItem>
                    <Label>{taxes.label}</Label>
                    <Price {...taxes.price} />
                </PriceItem>
            )}
            <PriceItem>
                <Label $bold>{total.label}</Label>
                <Price {...total.price} />
            </PriceItem>
            <Buttons>{buttons && buttons.map((button, index) => <Button key="index" {...button} />)}</Buttons>
        </Root>
    )
}
