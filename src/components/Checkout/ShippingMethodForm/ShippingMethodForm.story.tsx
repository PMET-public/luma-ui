import React from 'react'
import ShippingMethodForm from '.'
import { storiesOf } from '@storybook/react'
import useForm, { FormContext } from 'react-hook-form'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'

storiesOf('📦 Components/Checkout/ShippingMethodForm', module).add('Default', () => {
    const methods = useForm()
    return (
        <FormContext {...methods}>
            <ShippingMethodForm
                preview={boolean('preview', false)}
                items={[{ text: 'Fixed - $5.00', value: '1' }, { text: '1-Day Express - $29.99', value: '2' }]}
                button={{
                    text: 'Save',
                }}
                onSubmit={action('onSubmit')}
            />
        </FormContext>
    )
})
