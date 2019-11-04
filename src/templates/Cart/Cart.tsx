import React from 'react'
import { Component } from '../../lib'
import { Root, CartListWrapper, CartSummaryWrapper } from './Cart.styled'

import CartList, { CartListProps } from '../../components/CartList'
import CartSummary, { CartSummaryProps } from '../../components/CartSummary'

export type CartProps = {
    list: CartListProps
    summary: CartSummaryProps
}

export const Cart: Component<CartProps> = ({ list, summary, checkoutStep, checkout, ...props }) => {
    return (
        <Root {...props}>
            <CartListWrapper>
                <CartList {...list} />
            </CartListWrapper>
            <CartSummaryWrapper>
                <CartSummary {...summary} />
            </CartSummaryWrapper>
        </Root>
    )
}
