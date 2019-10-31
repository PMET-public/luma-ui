import React from 'react'
import { Component } from '../../lib'
import { Root, CartListWrapper, CartSummaryWrapper } from './Cart.styled'

import CartList, { CartListProps } from '../../components/CartList'
import CartSummary, { CartSummaryProps } from '../../components/CartSummary'
import Checkout, { CheckoutProps } from '../../components/Checkout'

export type CartProps = {
    list: CartListProps
    summary: CartSummaryProps
    checkout?: CheckoutProps
}

export const Cart: Component<CartProps> = ({ list, summary, checkout, ...props }) => {
    return (
        <Root {...props}>
            <CartListWrapper>
                <CartList {...list} />
            </CartListWrapper>
            <CartSummaryWrapper>
                <Checkout {...checkout} />
                <CartSummary {...summary} />
            </CartSummaryWrapper>
        </Root>
    )
}
