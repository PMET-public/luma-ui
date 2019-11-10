import React, { useState, useCallback } from 'react'
import { Component } from '../../../lib'
import { Root } from './ShippingMethodForm.styled'
import Form, { Select, SelectProps, FormError } from '../../Form'
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
    const { handleSubmit, register, errors } = useForm<ShippingMethodFormPayload>()

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

    const disabled = loading || !edit

    return (
        <Root as={Form} onSubmit={handleOnSubmit}>
            <Select
                name="shippingMethod"
                ref={register({ required: true })}
                error={errors.shippingMethod}
                disabled={disabled}
                {...props}
            />

            {formError && <FormError>{formError}</FormError>}

            {edit ? (
                <Button type="submit" loading={loading} {...submitButton} />
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
