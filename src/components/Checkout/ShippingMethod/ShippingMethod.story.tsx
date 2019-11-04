import React from 'react'
import ShippingMethod from '.'
import { storiesOf } from '@storybook/react'
import useForm, { FormContext } from 'react-hook-form'

storiesOf('📦 Components/Checkout/ShippingMethod', module).add('Default', () => {
    const methods = useForm()
    return (
        <FormContext {...methods}>
            <ShippingMethod
                items={[{ text: 'Fixed $5.00', value: '1' }, { text: '1-Day Express $29.99', value: '2' }]}
            />
        </FormContext>
    )
})
