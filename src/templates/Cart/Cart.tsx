import React from 'react'
import { Component } from '../../lib'
import { Root, Wrapper, SummaryWrapper } from './Cart.styled'

import CartList, { CartListProps } from '../../components/CartList'
import CartSummary, { CartSummaryProps } from '../../components/CartSummary'
import Button, { ButtonProps } from '../../components/Button'

export type CartProps = {
    list: CartListProps
    summary: CartSummaryProps
    buttons?: ButtonProps[]
}

export const Cart: Component<CartProps> = ({ list, summary, buttons, ...props }) => {
    return (
        <Root {...props}>
            <Wrapper>
                <CartList {...list} />
            </Wrapper>
            <SummaryWrapper>
                <CartSummary {...summary} />
                {buttons && buttons.map((button, index) => <Button key={index} {...button} />)}
            </SummaryWrapper>
        </Root>
    )
}
