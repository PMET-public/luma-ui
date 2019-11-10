import React, { useEffect, useCallback, useState } from 'react'
import { Component } from '../../../lib'
import { Root } from './PaymentMethodForm.styled'
import BraintreeWebDropIn, { Dropin, Options, PaymentMethodPayload as Payload } from 'braintree-web-drop-in'
import Button, { ButtonProps } from '../../Button'
import Form, { FormError } from '../../Form'
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
    const { handleSubmit } = useForm<PaymentMethodPayload>()

    const [instance, setInstance] = useState<Braintree>()

    const [formError, setFormError] = useState<string | null>(null)

    const [loading, setLoading] = useState(false)

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

    const handleOnSubmit = useCallback(
        async form => {
            setFormError(null)
            setLoading(true)

            try {
                await handleSubmit(handleRequestPaymentMethod)(form)
                setLoading(false)
            } catch (error) {
                setFormError(error.message)
                setLoading(false)
            }
        },
        [handleSubmit, onSubmit]
    )

    return (
        <Root as={Form} onSubmit={handleOnSubmit}>
            <div data-braintree-dropin {...props} />

            {formError && <FormError>{formError}</FormError>}

            {instance && <Button loading={loading} {...submitButton} />}
        </Root>
    )
}
