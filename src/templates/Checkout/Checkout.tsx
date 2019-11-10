import React, { useEffect, useRef } from 'react'
import { Component, Props } from '../../lib'
import { Root, Wrapper, Steps, Title, CartSummaryWrapper } from './Checkout.styled'

import CartList, { CartListProps } from '../../components/CartList'
import CartSummary, { CartSummaryProps } from '../../components/CartSummary'
import ContactInfoForm, { ContactInfoFormProps } from '../../components/Checkout/ContactInfoForm'
import ShippingMethodForm, { ShippingMethodFormProps } from '../../components/Checkout/ShippingMethodForm'
import PaymentMethodForm, { PaymentMethodFormProps } from '../../components/Checkout/PaymentMethodForm'
import PageTitle from '../../components/PageTitle'

export type CartProps = {
    step?: 1 | 2 | 3
    title: Props<{ text: string }>
    contactInfo: ContactInfoFormProps
    shippingMethod: ShippingMethodFormProps
    paymentMethod: PaymentMethodFormProps
    list: CartListProps
    summary: CartSummaryProps
}

export const Checkout: Component<CartProps> = ({
    step = 1,
    title,
    contactInfo,
    shippingMethod,
    paymentMethod,
    list,
    summary,
    ...props
}) => {
    const contactInfoElem = useRef<HTMLDivElement>(null)
    const shippingMethodElem = useRef<HTMLDivElement>(null)
    const paymentMethodElem = useRef<HTMLDivElement>(null)

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
            default:
                break
        }
    }, [step])

    return (
        <Root {...props}>
            <Wrapper>
                <PageTitle>{title.text}</PageTitle>
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
                </Steps>
            </Wrapper>

            <CartSummaryWrapper>
                <CartList {...list} />
                <CartSummary {...summary} />
            </CartSummaryWrapper>
        </Root>
    )
}
