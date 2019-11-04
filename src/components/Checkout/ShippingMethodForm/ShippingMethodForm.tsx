import React from 'react'
import { Component } from '../../../lib'
import { Root } from './ShippingMethodForm.styled'
import Form, { Checkbox, CheckboxProps } from '../../Form'
import useForm from 'react-hook-form'
import Button, { ButtonProps } from '../../Button'

export type ShippingMethodFormPayload = {
    shippingMethod: string
}

export type ShippingMethodFormProps = {
    submitButton: ButtonProps
    onSubmit: (payload: ShippingMethodFormPayload) => any
} & CheckboxProps

export const ShippingMethodForm: Component<ShippingMethodFormProps> = ({ submitButton, onSubmit, ...props }) => {
    const { handleSubmit, register, errors } = useForm<ShippingMethodFormPayload>()

    return (
        <Root as={Form} onSubmit={handleSubmit(onSubmit)}>
            <Checkbox
                type="radio"
                name="shippingMethod"
                ref={register({ required: true })}
                error={errors.shippingMethod}
                {...props}
            />

            <Button {...submitButton} />
        </Root>
    )
}
