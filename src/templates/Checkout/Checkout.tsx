import React from 'react'
import { Component } from '../../lib'
import { Root, Wrapper, Title, CartSummaryWrapper } from './Checkout.styled'

import CartList, { CartListProps } from '../../components/CartList'
import CartSummary, { CartSummaryProps } from '../../components/CartSummary'
import ContactInfoForm, { ContactInfoFormProps } from '../../components/Checkout/ContactInfoForm'
import ShippingMethodForm, { ShippingMethodFormProps } from '../../components/Checkout/ShippingMethodForm'
import PaymentMethodForm, { PaymentMethodFormProps } from '../../components/Checkout/PaymentMethodForm'

export type CartProps = {
    contactInfo: ContactInfoFormProps
    shippingMethod: ShippingMethodFormProps
    paymentMethod: PaymentMethodFormProps
    list: CartListProps
    summary: CartSummaryProps
}

export const Checkout: Component<CartProps> = ({
    active = 'contactInfo',
    contactInfo,
    shippingMethod,
    paymentMethod,
    list,
    summary,
    ...props
}) => {
    return (
        <Root {...props}>
            <Wrapper>
                <div>
                    <Title>Contact Information</Title>
                    <ContactInfoForm {...contactInfo} />
                </div>

                <div>
                    <Title>Shipping Method</Title>
                    <ShippingMethodForm {...shippingMethod} />
                </div>

                <div>
                    <Title>Payment Method</Title>
                    <PaymentMethodForm {...paymentMethod} />
                </div>
            </Wrapper>
            <CartSummaryWrapper>
                <CartList {...list} />
                <CartSummary {...summary} />
            </CartSummaryWrapper>
        </Root>
    )
}
