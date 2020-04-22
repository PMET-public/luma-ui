import React from 'react'
import PlaceOrderForm from '.'
import { storiesOf } from '@storybook/react'
import { boolean, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('📦 Components/Checkout/PlaceOrderForm', module).add('Default', () => {
    return (
        <PlaceOrderForm
            loading={boolean('loading', false)}
            submitButton={{
                text: 'Place Order',
            }}
            onSubmit={action('onSubmit')}
            error={text('error', '')}
        />
    )
})
