import React from 'react'
import { Component } from '../../../lib'
import { Root, Button } from './ApplyCouponForm.styled'
import Form, { Input, InputProps } from '../../Form'
import ButtonComponent, { ButtonProps } from '../../Button'

export type ApplyCouponFormPayload = {
    [code: string]: string
}

export type ApplyCouponFormProps = {
    field: InputProps
    loading?: boolean
    onSubmit: (payload: ApplyCouponFormPayload) => any
    submitting?: boolean
    submitButton: ButtonProps
    error?: string
}

export const ApplyCouponForm: Component<ApplyCouponFormProps> = ({
    field,
    loading = false,
    onSubmit,
    submitButton,
    submitting = false,
    error,
    ...props
}) => {
    return (
        <Root as={Form} onSubmit={onSubmit} {...props}>
            <Input loading={loading} rules={{ required: true }} disabled={submitting} error={error} {...field} />
            <Button as={ButtonComponent} type="submit" loading={loading || submitting} {...submitButton} />
        </Root>
    )
}
