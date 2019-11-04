import React, { useEffect, useCallback, useState } from 'react'
import { Component } from '../../../lib'
import { Root } from './BraintreeForm.styled'
import BraintreeWebDropIn, { Dropin, Options, PaymentMethodPayload } from 'braintree-web-drop-in'
import Button, { ButtonProps } from '../../Button'
import Form from '../../Form'
import useForm from 'react-hook-form'

export type Braintree = Dropin

export type BraintreeFormProps = {
    options: Omit<Options, 'container'>
    submitButton: ButtonProps
    onSubmit: (payload: PaymentMethodPayload) => any
}

export const BraintreeForm: Component<BraintreeFormProps> = ({ options, submitButton, onSubmit, ...props }) => {
    const [instance, setInstance] = useState<Braintree>()

    const { handleSubmit } = useForm<PaymentMethodPayload>()

    useEffect(() => {
        ;(async function() {
            const instance = await BraintreeWebDropIn.create({
                ...options,
                container: '[data-braintree-dropin]',
            })

            setInstance(instance)
        })().catch(error => {
            setInstance(undefined)
            console.error(error)
        })

        return () => {
            if (instance) instance.teardown()
        }
    }, [JSON.stringify(options)])

    const handleRequestPaymentMethod = useCallback(async () => {
        if (instance) {
            const payload = await instance.requestPaymentMethod()
            onSubmit(payload)
        }
    }, [instance])

    return (
        <Root as={Form} onSubmit={handleSubmit(handleRequestPaymentMethod)}>
            <div data-braintree-dropin {...props} />
            {instance && <Button {...submitButton} />}
        </Root>
    )
}
