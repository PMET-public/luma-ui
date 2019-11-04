import React from 'react'
import { Component } from '../../../lib'
import { Root } from './ShippingMethodForm.styled'
import Form, { Select, SelectProps } from '../../Form'
import useForm from 'react-hook-form'
import Button, { ButtonProps } from '../../Button'

export type ShippingMethodFormPayload = {
    shippingMethod: string
}

export type ShippingMethodFormProps = {
    preview?: boolean
    button: ButtonProps
    onSubmit: (payload: ShippingMethodFormPayload) => any
} & SelectProps

export const ShippingMethodForm: Component<ShippingMethodFormProps> = ({ preview, button, onSubmit, ...props }) => {
    const { handleSubmit, register, errors } = useForm<ShippingMethodFormPayload>()

    return (
        <Root as={Form} onSubmit={handleSubmit(onSubmit)}>
            <Select
                name="shippingMethod"
                ref={register({ required: true })}
                error={errors.shippingMethod}
                disabled={preview}
                {...props}
            />
            <Button {...button} />
        </Root>
    )
}
