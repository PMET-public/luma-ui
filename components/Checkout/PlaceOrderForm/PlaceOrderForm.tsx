import React from 'react'
import { Component } from '../../../lib'
import { Root } from './PlaceOrderForm.styled'
import Form, { FormProps, FormError } from '../../Form'
import Button, { ButtonProps } from '../../Button'

export type PlaceOrderFormPayload = {}

export type PlaceOrderFormProps = FormProps<PlaceOrderFormPayload> & {
    loading?: boolean
    submitting?: boolean
    error?: string
    submitButton: ButtonProps
    onSubmit: (payload: PlaceOrderFormPayload) => any
}

export const PlaceOrderForm: Component<PlaceOrderFormProps> = ({ loading, submitting, error, submitButton, onSubmit, ...props }) => {
    return (
        <Root as={Form} onSubmit={onSubmit} {...props}>
            {error && <FormError>{error}</FormError>}
            <Button type="submit" loading={loading || submitting} {...submitButton} />
        </Root>
    )
}
