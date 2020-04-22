import React from 'react'
import CartSummary from '.'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

storiesOf('📦 Components/CartSummary', module).add('Default', () => (
    <CartSummary
        style={{ width: '100%', maxWidth: '40rem' }}
        title={{ as: 'h2', text: 'Summary' }}
        prices={[
            {
                label: 'Subtotal',
                price: {
                    regular: 19.99,
                },
            },
            {
                label: 'Taxes',
                price: null,
            },
            {
                appearance: 'bold',
                label: 'Total',
                price: {
                    regular: 19.99,
                },
            },
        ]}
        coupons={{
            label: 'Apply Gift Card or Discount Code',
            items: [
                {
                    field: { label: 'Gift Card', name: 'giftCardCode' },
                    submitButton: { text: 'Apply' },
                    onSubmit: action('onSubmit'),
                },
                {
                    field: { label: 'Discount Code', name: 'discountCode' },
                    submitButton: { text: 'Apply' },
                    onSubmit: action('onSubmit'),
                },
            ],
        }}
    />
))
