import React, { useState, useCallback } from 'react'
import { Component } from '../../../lib'
import { Root } from './ShippingMethodForm.styled'
import Form, { Select, SelectProps, FormError } from '../../Form'
import { useForm } from 'react-hook-form'
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
    loading?: boolean
} & SelectProps

export const ShippingMethodForm: Component<ShippingMethodFormProps> = ({
    edit = false,
    submitButton,
    editButton,
    onEdit,
    onSubmit,
    loading,
    ...props
}) => {
    const { handleSubmit, register, errors } = useForm<ShippingMethodFormPayload>()

    const [formError, setFormError] = useState<string | null>(null)

    const [submitting, setSubmitting] = useState(false)

    const handleOnSubmit = useCallback(
        async form => {
            setFormError(null)
            setSubmitting(true)

            try {
                await handleSubmit(onSubmit)(form)
                setSubmitting(false)
            } catch (error) {
                setFormError(error.message)
                setSubmitting(false)
            }
        },
        [handleSubmit, onSubmit]
    )

    const disabled = submitting || !edit

    return (
        <Root as={Form} onSubmit={handleOnSubmit}>
            <Select
                loading={loading}
                name="shippingMethod"
                ref={register({ required: true })}
                error={errors.shippingMethod}
                disabled={disabled}
                {...props}
            />

            {formError && <FormError>{formError}</FormError>}

            {edit ? (
                <Button type="submit" loading={loading || submitting} {...submitButton} />
            ) : (
                <Button
                    type="button"
                    outline
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
