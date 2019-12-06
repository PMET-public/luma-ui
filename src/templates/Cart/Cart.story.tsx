import React from 'react'
import Cart from './'
import { storiesOf } from '@storybook/react'
import App from '../../components/App'
import { AppMockData } from '../../components/App/App.story'
import { number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('📑 Templates/Cart', module).add('Default', () => (
    <App {...AppMockData}>
        <Cart
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
            }}
            button={{ text: 'Checkout' }}
        />
    </App>
))
