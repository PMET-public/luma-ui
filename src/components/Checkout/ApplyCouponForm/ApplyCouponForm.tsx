import React, { useEffect } from 'react'
import { Component } from '../../../lib'
import { Root, Button } from './ApplyCouponForm.styled'
import Form, { Input, InputProps } from '../../Form'
import ButtonComponent, { ButtonProps } from '../../Button'

import { useForm } from 'react-hook-form'

export type ApplyCouponFormPayload = {
    [code: string]: string
}

export type ApplyCouponFormProps = {
    field: InputProps
    loading?: boolean
    onSubmit: (payload: ApplyCouponFormPayload) => any
    submitting?: boolean
    submitButton: ButtonProps
}

export const ApplyCouponForm: Component<ApplyCouponFormProps> = ({
    field,
    loading = false,
    onSubmit,
    submitButton,
    submitting = false,
    ...props
}) => {
    const { handleSubmit, register, errors, setError, clearError } = useForm<ApplyCouponFormPayload>()

    useEffect(() => {
        if (field.error?.message) {
            setError(field.name, 'ssError', field.error.message)
        } else {
            clearError(field.name)
        }
    }, [field.error?.message])

    return (
        <Root as={Form} onSubmit={handleSubmit(onSubmit)} {...props}>
            <Input
                key={field.defaultValue as string} // update field when defaultValue changes
                loading={loading}
                ref={register({ required: true })}
                disabled={submitting}
                error={errors[field.name]}
                {...field}
            />

            <Button as={ButtonComponent} type="submit" loading={loading || submitting} {...submitButton} />
        </Root>
    )
}
