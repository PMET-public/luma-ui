import React from 'react'
import { Component } from '../../lib'
import { Root, SummaryWrapper, CartSummaryWrapper, ProductList, Button, StickyButtonWrapper } from './Cart.styled'
import CartList, { CartListProps } from '../../components/CartList'
import CartSummary, { CartSummaryProps } from '../../components/CartSummary'
import ButtonComponent, { ButtonProps } from '../../components/Button'
import Breadcrumbs, { BreadcrumbsProps } from '../../components/Breadcrumbs'

export type CartProps = {
    loading?: boolean
    breadcrumbs: BreadcrumbsProps
    list: CartListProps
    summary: CartSummaryProps
    button: ButtonProps
}

export const Cart: Component<CartProps> = ({ loading, breadcrumbs, list, summary, button, ...props }) => {
    return (
        <Root {...props}>
            <ProductList>
                <Breadcrumbs loading={loading} {...breadcrumbs} />
                <CartList loading={loading} {...list} />
            </ProductList>

            <SummaryWrapper>
                <CartSummaryWrapper>
                    <CartSummary {...summary} />
                    <Button as={ButtonComponent} {...button} />
                </CartSummaryWrapper>
            </SummaryWrapper>

            <StickyButtonWrapper>
                <ButtonComponent loading={loading} {...button} />
            </StickyButtonWrapper>
        </Root>
    )
}
