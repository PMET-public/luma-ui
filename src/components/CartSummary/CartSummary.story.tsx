import React from 'react'
import CartSummary from './'
import { storiesOf } from '@storybook/react'

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
    />
))
