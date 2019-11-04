import React, { EventHandler, FormEvent, useRef, ChangeEvent, useState } from 'react'
import { Component, Props } from '../../lib'
import { Root, Title } from './Checkout.styled'

import useForm, { FormContext } from 'react-hook-form'

import Address, { AddressProps } from '../Checkout/Address'
import ShippingMethod, { ShippingMethodProps } from './ShippingMethod'
import Form, { Checkbox } from '../Form'
import Button from '../Button'
import Braintree from './Braintree'
import { Dropin, PaymentMethodPayload } from 'braintree-web-drop-in'

type FormSection<P> = {
    title: Props<{ text: string }>
    onSubmit: EventHandler<FormEvent>
} & P

export type CheckoutProps = {
    shippingAddress: FormSection<AddressProps>
    shippingMethod: FormSection<ShippingMethodProps>
    paymentMethod: FormSection<{
        title: Props
        braintreeToken: string
        billingAddress: AddressProps
        onSubmit: (nonce: PaymentMethodPayload) => any
    }>
}

export const Checkout: Component<CheckoutProps> = ({ shippingAddress, shippingMethod, paymentMethod, ...props }) => {
    const shippingAddressForm = useForm()
    const {
        title: { text: shippingAddressTitle, shippingAddressTitleProps },
        onSubmit: onShippingAddressSubmit,
        ...shippingAddressProps
    } = shippingAddress

    const shippingMethodForm = useForm()
    const {
        title: { text: shippingMethodTitle, shippingMethodTitleProps },
        onSubmit: onShippingMethodSubmit,
        ...shippingMethodProps
    } = shippingMethod

    const paymentMethodForm = useForm()
    const [sameAsShippingAddress, setSameAsShippingAddress] = useState(true)

    const braintreeInstance = useRef<Dropin>()
    const {
        title: { text: paymentMethodTitle, paymentMethodTitleProps },
        onSubmit: onPaymentMethodSubmit,
    } = paymentMethod

    const handleOnPaymentMethodSubmit = async (event: FormEvent) => {
        if (!braintreeInstance.current) return
        const nonce = await braintreeInstance.current.requestPaymentMethod()

        onPaymentMethodSubmit({
            ...nonce,
            billingAddress: paymentMethodForm.getValues(),
        })
    }

    return (
        <Root {...props}>
            <FormContext {...shippingAddressForm}>
                <Form autoComplete="on" onSubmit={shippingAddressForm.handleSubmit(onShippingAddressSubmit)}>
                    <Title {...shippingAddressTitleProps}>{shippingAddressTitle}</Title>
                    <Address {...shippingAddressProps} />
                    <Button type="submit">Save</Button>
                </Form>
            </FormContext>

            <FormContext {...shippingMethodForm}>
                <Form onSubmit={shippingMethodForm.handleSubmit(onShippingMethodSubmit)}>
                    <Title {...shippingMethodTitleProps}>{shippingMethodTitle}</Title>
                    <ShippingMethod {...shippingMethodProps} />
                    <Button type="submit">Save</Button>
                </Form>
            </FormContext>

            <FormContext {...paymentMethodForm}>
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

                    <Checkbox
                        name="sameAsShippingAddress"
                        ref={paymentMethodForm.register}
                        items={[
                            { text: 'Same as Shipping Address', value: 'true', defaultChecked: sameAsShippingAddress },
                        ]}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            setSameAsShippingAddress(event.target.checked)
                        }}
                    />

                    {!sameAsShippingAddress && <Address {...paymentMethod.billingAddress} />}

                    <Button type="submit">Save</Button>
                </Form>
            </FormContext>
        </Root>
    )
}
