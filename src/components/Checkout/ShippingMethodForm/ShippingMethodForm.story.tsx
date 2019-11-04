import React from 'react'
import ShippingMethodForm from '.'
import { storiesOf } from '@storybook/react'
import useForm, { FormContext } from 'react-hook-form'
import { action } from '@storybook/addon-actions'

storiesOf('📦 Components/Checkout/ShippingMethodForm', module).add('Default', () => {
    const methods = useForm()
    return (
        <FormContext {...methods}>
            <ShippingMethodForm
                items={[
                    { text: 'Fixed $5.00', value: '1' },
                    { text: '1-Day Express $29.99', value: '2', defaultChecked: true },
                ]}
                submitButton={{
                    text: 'Save',
                }}
                onSubmit={action('onSubmit')}
            />
        </FormContext>
    )
})
