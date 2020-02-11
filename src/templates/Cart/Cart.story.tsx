import React from 'react'
import Cart from './'
import { storiesOf } from '@storybook/react'
import App from '../../components/App'
import { AppMockData } from '../../components/App/App.story'
import { number, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('📑 Templates/Cart', module).add('Default', () => (
    <App {...AppMockData}>
        <Cart
            loading={boolean('loading', true)}
            breadcrumbs={{ prefix: '#', items: [{ text: 'Cart' }] }}
            list={{
                items: new Array(number('quantity', 2)).fill({
                    title: {
                        text: 'Jillian Top',
                    },
                    sku: 'SKU. 123456',
                    thumbnail: {
                        src: require('../../../public/images/fashion-thumb2.jpg'),
                    },
                    quantity: {
                        value: 1,
                        onUpdate: action('onUpdate'),
                        onRemove: action('onRemove'),
                        addLabel: 'Add',
                        removeLabel: 'Remove',
                        substractLabel: 'Remove',
                    },
                    price: {
                        regular: 39.99,
                    },
                    options: [
                        { label: 'Size', value: 'M' },
                        { label: 'Color', value: 'Red' },
                    ],
                }),
            }}
            summary={{
                title: { as: 'h2', text: 'Bag Summary' },
                prices: [
                    {
                        label: 'Taxes',
                        price: null,
                    },
                    {
                        appearance: 'bold',
                        label: 'Subtotal',
                        price: {
                            regular: 19.99,
                        },
                    },
                ],
                coupons: {
                    label: 'Apply Gift Card or Discount Code',
                    items: [
                        {
                            field: { label: 'Gift Card', name: 'giftCardCode' },
                            submitButton: { text: 'Apply' },
                            onSubmit: () => {},
                        },
                        {
                            field: { label: 'Discount Code', name: 'discountCode' },
                            submitButton: { text: 'Apply' },
                            onSubmit: () => {},
                        },
                    ],
                },
            }}
            button={{ text: 'Checkout' }}
        />
    </App>
))
