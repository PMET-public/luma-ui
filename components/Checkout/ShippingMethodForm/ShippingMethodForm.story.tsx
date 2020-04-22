import React from 'react'
import ShippingMethodForm from '.'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'

storiesOf('📦 Components/Checkout/ShippingMethodForm', module).add('Default', () => {
    return (
        <ShippingMethodForm
            loading={boolean('loading', false)}
            edit={boolean('edit', false)}
            fields={{
                shippingMethod: {
                    name: 'shippingMethod',
                    items: [
                        { text: 'Fixed - $5.00', value: '1' },
                        { text: '1-Day Express - $29.99', value: '2' },
                    ],
                },
            }}
            submitButton={{
                text: 'Save',
            }}
            editButton={{
                text: 'Edit',
            }}
            error={text('error', '')}
            onSubmit={action('onSubmit')}
            onEdit={action('onEdit')}
        />
    )
})
