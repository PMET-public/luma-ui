import React, { useEffect, useRef } from 'react'
import { Component } from '../../lib'
import { Root, Wrapper, Steps, Title, CartSummaryWrapper } from './Checkout.styled'

import CartList, { CartListProps } from '../../components/CartList'
import CartSummary, { CartSummaryProps } from '../../components/CartSummary'
import ContactInfoForm, { ContactInfoFormProps } from '../../components/Checkout/ContactInfoForm'
import ShippingMethodForm, { ShippingMethodFormProps } from '../../components/Checkout/ShippingMethodForm'
import PaymentMethodForm, { PaymentMethodFormProps } from '../../components/Checkout/PaymentMethodForm'
import PlaceOrderForm, { PlaceOrderFormProps } from '../../components/Checkout/PlaceOrderForm'
import Breadcrumbs, { BreadcrumbsProps } from '../../components/Breadcrumbs'

export type CheckoutProps = {
    step: 1 | 2 | 3 | 4
    breadcrumbs: BreadcrumbsProps
    contactInfo: ContactInfoFormProps
    shippingMethod: ShippingMethodFormProps
    paymentMethod: PaymentMethodFormProps
    placeOrder: PlaceOrderFormProps
    list: CartListProps
    summary: CartSummaryProps
}

export const Checkout: Component<CheckoutProps> = ({
    step = 1,
    breadcrumbs,
    contactInfo,
    shippingMethod,
    paymentMethod,
    placeOrder,
    list,
    summary,
    ...props
}) => {
    const contactInfoElem = useRef<HTMLDivElement>(null)
    const shippingMethodElem = useRef<HTMLDivElement>(null)
    const paymentMethodElem = useRef<HTMLDivElement>(null)
    const placeOrderElem = useRef<HTMLDivElement>(null)

    useEffect(() => {
        switch (step) {
            case 1:
                if (!contactInfoElem.current) return
                window.scrollTo({ top: 0, behavior: 'smooth' }) //.scrollIntoView(scrollOptions)
                break
            case 2:
                if (!shippingMethodElem.current) return
                window.scrollTo({
                    top: shippingMethodElem.current.offsetTop - shippingMethodElem.current.offsetHeight,
                    behavior: 'smooth',
                })
                break
            case 3:
                if (!paymentMethodElem.current) return
                window.scrollTo({
                    top: paymentMethodElem.current.offsetTop - paymentMethodElem.current.offsetHeight,
                    behavior: 'smooth',
                })
                break
            case 4:
                if (!placeOrderElem.current) return
                window.scrollTo({
                    top: placeOrderElem.current.offsetTop - placeOrderElem.current.offsetHeight,
                    behavior: 'smooth',
                })
                break
            default:
                break
        }
    }, [step])

    return (
        <Root {...props}>
            <Wrapper>
                <Breadcrumbs {...breadcrumbs} />
                <Steps>
                    <div ref={contactInfoElem}>
                        <Title>Contact Information</Title>
                        <ContactInfoForm {...contactInfo} />
                    </div>

                    {step > 1 && (
                        <div ref={shippingMethodElem}>
                            <Title>Shipping Method</Title>
                            <ShippingMethodForm {...shippingMethod} />
                        </div>
                    )}
                    {step > 2 && (
                        <div ref={paymentMethodElem}>
                            <Title>Payment Method</Title>
                            <PaymentMethodForm {...paymentMethod} />
                        </div>
                    )}

                    {step > 3 && (
                        <div ref={placeOrderElem}>
                            <PlaceOrderForm {...placeOrder} />
                        </div>
                    )}
                </Steps>
            </Wrapper>

            <CartSummaryWrapper>
                <CartList {...list} />
                <CartSummary {...summary} />
            </CartSummaryWrapper>
        </Root>
    )
}
