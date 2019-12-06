import React from 'react'
import CartList from '.'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('📦 Components/CartList', module).add('Default', () => (
    <CartList
        items={new Array(number('count', 1)).fill({
            title: {
                text: 'Jillian Top',
            },
            sku: 'SKU. 123456',
            thumbnail: {
                src: require('../../../public/images/fashion-thumb2.jpg'),
            },
            quantity: {
                value: 2,
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
        })}
    />
))
