import React from 'react'
import ShoppingCart from './'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('📦 Components/ShoppingCart', module).add('Default', () => (
    <ShoppingCart
        removeButton={{ label: 'remove item', onClick: action('remove item') }}
        items={new Array(number('count', 1)).fill({
            title: {
                text: 'Jillian Top',
            },
            sku: 'SKU. 123456',
            thumbnail: {
                src: require('../../../public/images/fashion-thumb2.jpg'),
            },
            quantity: 1,
            price: {
                regular: 39.99,
            },
            options: [{ label: 'Size', value: 'M' }, { label: 'Color', value: 'Red' }],
        })}
    />
))
