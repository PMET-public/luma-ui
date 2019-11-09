import React, { useEffect, useCallback, useState } from 'react'
import { Component } from '../../../lib'
import { Root } from './PaymentMethodForm.styled'
import BraintreeWebDropIn, { Dropin, Options, PaymentMethodPayload as Payload } from 'braintree-web-drop-in'
import Button, { ButtonProps } from '../../Button'
import Form from '../../Form'
import useForm from 'react-hook-form'

export type Braintree = Dropin

export type PaymentMethodPayload = Payload

export type PaymentMethodFormProps = {
    braintree: Omit<Options, 'container'>
    submitButton: ButtonProps
    onSubmit: (payload: PaymentMethodPayload) => any
}

export const PaymentMethodForm: Component<PaymentMethodFormProps> = ({
    braintree,
    submitButton,
    onSubmit,
    ...props
}) => {
    const [instance, setInstance] = useState<Braintree>()

    const { handleSubmit, formState } = useForm<PaymentMethodPayload>()

    useEffect(() => {
        ;(async function() {
            const instance = await BraintreeWebDropIn.create({
                ...braintree,
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
    }, [JSON.stringify(braintree)])

    const handleRequestPaymentMethod = useCallback(async () => {
        if (!instance) return
        try {
            const payload = await instance.requestPaymentMethod()
            return onSubmit(payload)
        } catch (error) {
            console.error(error.message)
        }
    }, [instance])

    return (
        <Root as={Form} onSubmit={handleSubmit(handleRequestPaymentMethod)}>
            <div data-braintree-dropin {...props} />
            {instance && <Button loading={formState.isSubmitting} {...submitButton} />}
        </Root>
    )
}
