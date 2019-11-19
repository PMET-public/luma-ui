import React, { useState, useCallback } from 'react'
import { Component } from '../../../lib'
import { Root } from './PlaceOrderForm.styled'
import Form, { FormError } from '../../Form'
import useForm from 'react-hook-form'
import Button, { ButtonProps } from '../../Button'

export type PlaceOrderFormPayload = {}

export type PlaceOrderFormProps = {
    submitButton: ButtonProps
    onSubmit: (payload: PlaceOrderFormPayload) => any
}

export const PlaceOrderForm: Component<PlaceOrderFormProps> = ({ submitButton, onSubmit, ...props }) => {
    const { handleSubmit } = useForm<PlaceOrderFormPayload>()

    const [formError, setFormError] = useState<string | null>(null)

    const [loading, setLoading] = useState(false)

    const handleOnSubmit = useCallback(
        async form => {
            setFormError(null)
            setLoading(true)

            try {
                await handleSubmit(onSubmit)(form)
                setLoading(false)
            } catch (error) {
                setFormError(error.message)
                setLoading(false)
            }
        },
        [handleSubmit, onSubmit]
    )

    return (
        <Root as={Form} onSubmit={handleOnSubmit} {...props}>
            {formError && <FormError>{formError}</FormError>}

            <Button type="submit" loading={loading} {...submitButton} />
        </Root>
    )
}
