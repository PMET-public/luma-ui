import React from 'react'
import ApplyCouponForm from '.'
import { storiesOf } from '@storybook/react'
import { boolean, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('📦 Components/Checkout/ApplyCouponForm', module).add('Default', () => (
    <ApplyCouponForm
        field={{
            label: 'Gift Card',
            name: 'giftCard',
        }}
        loading={boolean('loading', false)}
        onSubmit={action('onSubmit')}
        submitButton={{
            text: 'Apply',
        }}
        error={text('error', '')}
    />
))
