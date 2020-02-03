import React, { useState, useCallback } from 'react'
import { Component } from '../../../lib'
import { Root, Button } from './ApplyCouponsForm.styled'
import Form, { Input, InputProps } from '../../Form'
import { useForm } from 'react-hook-form'
import ButtonComponent, { ButtonProps } from '../../Button'

export type ApplyCouponsFormPayload = {
    giftCardCode: string
    couponCode: string
}

export type ApplyCouponsFormProps = {
    submitButton: ButtonProps
    onSubmit: (payload: ApplyCouponsFormPayload) => any
    loading?: boolean
    fields: {
        giftCardCode: InputProps
        couponCode: InputProps
    }
}
export const ApplyCouponsForm: Component<ApplyCouponsFormProps> = ({
    fields,
    submitButton,
    onSubmit,
    loading,
    ...props
}) => {
    const { handleSubmit, register, errors, setError } = useForm<ApplyCouponsFormPayload>()

    const [submitting, setSubmitting] = useState(false)

    const handleOnSubmit = useCallback(
        async form => {
            setError('giftCardCode', '', undefined)
            setSubmitting(true)

            try {
                await handleSubmit(onSubmit)(form)
                setSubmitting(false)
            } catch (error) {
                setError('giftCardCode', '', error?.message)
                setSubmitting(false)
            }
        },
        [handleSubmit, onSubmit]
    )

    const disabled = submitting

    return (
        <Root as={Form} onSubmit={handleOnSubmit} {...props}>
            <Input
                {...fields.giftCardCode}
                loading={loading}
                name="giftCardCode"
                ref={register({ required: true })}
                error={errors.giftCardCode}
                disabled={disabled}
            />

            <Button as={ButtonComponent} type="submit" loading={loading || submitting} {...submitButton} />

            <Input
                {...fields.couponCode}
                loading={loading}
                name="couponCode"
                ref={register({ required: true })}
                error={errors.couponCode}
                disabled={disabled}
            />

            <Button as={ButtonComponent} type="submit" loading={loading || submitting} {...submitButton} />
        </Root>
    )
}
