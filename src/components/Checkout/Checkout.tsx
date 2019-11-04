import React, { useRef, useCallback } from 'react'
import { Component, Props } from '../../lib'
import { Root, Title } from './Checkout.styled'

import useForm, { FormContext } from 'react-hook-form'

import Address, { AddressProps, AddressPayload } from '../Checkout/Address'
import ShippingMethod, { ShippingMethodProps, ShippingMethodPayload } from './ShippingMethod'
import Form, { Input, patterns } from '../Form'
import Button from '../Button'
import Braintree from './Braintree'
import { Dropin, PaymentMethodPayload } from 'braintree-web-drop-in'

export type CheckoutProps = {
    personalInfo: {
        title: Props<{ text: string }>
        onSubmit: (payload: { email: string } & AddressPayload) => any
    } & AddressProps
    shippingMethod: {
        title: Props<{ text: string }>
        onSubmit: (payload: ShippingMethodPayload) => any
    } & ShippingMethodProps
    paymentMethod: {
        title: Props
        braintreeToken: string
        onSubmit: (payload: PaymentMethodPayload) => any
    }
}

export const Checkout: Component<CheckoutProps> = ({ personalInfo, shippingMethod, paymentMethod, ...props }) => {
    /**
     * Personal Info
     */
    const personalInfoForm = useForm<AddressPayload>()

    const {
        title: { text: personalInfoTitle, personalInfoTitleProps },
        onSubmit: onPersonalInfoSubmit,
        ...personalInfoProps
    } = personalInfo

    const handleOnPersonalInfoSubmit = useCallback(() => {
        const payload = personalInfoForm.getValues({ nest: true })
        onPersonalInfoSubmit(payload)
    }, [personalInfoForm, onPersonalInfoSubmit])

    /**
     * Shipping Method
     */
    const shippingMethodForm = useForm<ShippingMethodPayload>()

    const {
        title: { text: shippingMethodTitle, shippingMethodTitleProps },
        onSubmit: onShippingMethodSubmit,
        ...shippingMethodProps
    } = shippingMethod

    const handleOnShippingMethodSubmit = useCallback(() => {
        const payload = shippingMethodForm.getValues({ nest: true })
        onShippingMethodSubmit(payload)
    }, [shippingMethodForm, onShippingMethodSubmit])

    /**
     * Payment Method
     */
    const paymentMethodForm = useForm<PaymentMethodPayload>()

    const braintreeInstance = useRef<Dropin>()

    const {
        title: { text: paymentMethodTitle, paymentMethodTitleProps },
        onSubmit: onPaymentMethodSubmit,
    } = paymentMethod

    const handleOnPaymentMethodSubmit = useCallback(async () => {
        if (!braintreeInstance.current) return
        const payload = await braintreeInstance.current.requestPaymentMethod()
        onPaymentMethodSubmit(payload)
    }, [braintreeInstance.current, onPaymentMethodSubmit])

    return (
        <Root {...props}>
            {/* Personal Info */}
            <FormContext {...personalInfoForm}>
                <Form autoComplete="on" onSubmit={personalInfoForm.handleSubmit(handleOnPersonalInfoSubmit)}>
                    <Title {...personalInfoTitleProps}>{personalInfoTitle}</Title>
                    <Input
                        label="Email"
                        name="email"
                        ref={personalInfoForm.register({ required: true, pattern: patterns.email })}
                    />
                    <Address {...personalInfoProps} />
                    <Button type="submit">Save</Button>
                </Form>
            </FormContext>

            {/* Shipping Method */}
            <FormContext {...shippingMethodForm}>
                <Form onSubmit={shippingMethodForm.handleSubmit(handleOnShippingMethodSubmit)}>
                    <Title {...shippingMethodTitleProps}>{shippingMethodTitle}</Title>
                    <ShippingMethod {...shippingMethodProps} />
                    <Button type="submit">Save</Button>
                </Form>
            </FormContext>

            {/* Payment Method */}
            <Form onSubmit={paymentMethodForm.handleSubmit(handleOnPaymentMethodSubmit)}>
                <Title {...paymentMethodTitleProps}>{paymentMethodTitle}</Title>

                <Braintree
                    options={{
                        authorization: paymentMethod.braintreeToken,
                        vaultManager: true,
                        preselectVaultedPaymentMethod: true,

                        card: {
                            overrides: {
                                fields: {
                                    number: {
                                        maskInput: {
                                            // Only show last four digits on blur.
                                            showLastFour: true,
                                        },
                                    },
                                },
                            },
                        },
                    }}
                    onLoad={x => (braintreeInstance.current = x)}
                />

                <Button type="submit">Save</Button>
            </Form>
        </Root>
    )
}
