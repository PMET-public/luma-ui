import React, { useCallback } from 'react'
import { Component } from '../../../lib'
import { Root } from './ShippingMethodForm.styled'
import Form, { FormProps, Select, SelectProps, FormError } from '../../Form'
import Button, { ButtonProps } from '../../Button'

export type ShippingMethodFormPayload = {
    shippingMethod: string
}

export type ShippingMethodFormProps = FormProps<ShippingMethodFormPayload> & {
    edit?: boolean
    editButton: ButtonProps
    submitButton: ButtonProps
    onEdit: (...args: any) => any
    loading?: boolean
    submitting?: boolean
    error?: string
    fields: {
        shippingMethod: SelectProps
    }
}

export const ShippingMethodForm: Component<ShippingMethodFormProps> = ({
    edit = false,
    submitButton,
    editButton,
    onEdit,
    onSubmit,
    loading,
    submitting,
    fields,
    error,
    ...props
}) => {
    const handleOnClickEdit = useCallback(
        (e: Event) => {
            e.preventDefault()
            onEdit()
        },
        [onEdit]
    )

    const { shippingMethod } = fields

    const disabled = submitting || !edit

    return (
        <Root as={Form} onSubmit={onSubmit}>
            <Select loading={loading} disabled={disabled} {...shippingMethod} />

            {error && <FormError>{error}</FormError>}

            {edit ? (
                <Button type="submit" loading={loading || submitting} {...submitButton} />
            ) : (
                <Button type="button" outline {...editButton} onClick={handleOnClickEdit} />
            )}
        </Root>
    )
}
