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
    edit?: boolean
    editButton: ButtonProps
    submitButton: ButtonProps
    onSubmit: (payload: ShippingMethodFormPayload) => any
    onEdit: (...args: any) => any
} & SelectProps

export const ShippingMethodForm: Component<ShippingMethodFormProps> = ({
    edit = false,
    submitButton,
    editButton,
    onEdit,
    onSubmit,
    ...props
}) => {
    const { handleSubmit, register, errors, formState } = useForm<ShippingMethodFormPayload>()

    const disabled = formState.isSubmitting || !edit

    return (
        <Root as={Form} onSubmit={handleSubmit(onSubmit)}>
            <Select
                name="shippingMethod"
                ref={register({ required: true })}
                error={errors.shippingMethod}
                disabled={disabled}
                {...props}
            />

            {edit ? (
                <Button type="submit" loading={formState.isSubmitting} {...submitButton} />
            ) : (
                <Button
                    type="button"
                    secondary
                    {...editButton}
                    onClick={(e: Event) => {
                        e.preventDefault()
                        onEdit()
                    }}
                />
            )}
        </Root>
    )
}
