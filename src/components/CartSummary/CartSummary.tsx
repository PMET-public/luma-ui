import React from 'react'
import { Component, Props } from '../../lib'
import { Root, Title, PriceItem, Label } from './CartSummary.styled'
import Price, { PriceProps } from '../Price'
import ApplyCouponForm, { ApplyCouponFormProps } from '../Checkout/ApplyCouponForm'
import Accordion from '../Accordion'

type PriceItemProps = {
    label: string
    price?: PriceProps | null
    appearance?: 'bold' | 'normal'
}

export type CartSummaryProps = {
    title: Props<{ text: string }>
    prices: PriceItemProps[]
    coupons?: {
        label: string
        open?: boolean
        items: ApplyCouponFormProps[]
    }
}

export const CartSummary: Component<CartSummaryProps> = ({ title, prices, coupons, ...props }) => {
    return (
        <Root aria-label={title.text} {...props}>
            <Title {...title}>{title.text}</Title>

            {coupons && (
                <Accordion defaultSelected={coupons.open ? 0 : -1}>
                    <Accordion.Item label={coupons.label}>
                        {coupons.items.map((coupon, index) => (
                            <ApplyCouponForm key={index} {...coupon} />
                        ))}
                    </Accordion.Item>
                </Accordion>
            )}

            {prices.map(({ label, price, appearance = 'normal' }, index) => (
                <PriceItem key={index}>
                    <Label $appearance={appearance}>{label}</Label>
                    {price ? <Price {...price} /> : '–'}
                </PriceItem>
            ))}
        </Root>
    )
}
