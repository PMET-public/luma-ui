import React from 'react'
import { Component } from '../../../lib'
import { Root } from './ShippingMethod.styled'
import { Checkbox, CheckboxProps } from '../../Form'
import { useFormContext } from 'react-hook-form'

export type ShippingMethodProps = CheckboxProps

export const ShippingMethod: Component<ShippingMethodProps> = ({ ...props }) => {
    const { register, errors } = useFormContext()

    return (
        <Root>
            <Checkbox
                type="radio"
                name="shippingMethod"
                ref={register({ required: true })}
                error={errors.shippingMethod}
                {...props}
            />
        </Root>
    )
}
