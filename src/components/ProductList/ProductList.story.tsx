import React from 'react'
import ProductList from '.'
import { storiesOf } from '@storybook/react'
import { number, boolean } from '@storybook/addon-knobs'

storiesOf('📦 Components/ProductList', module).add('Default', () => (
    <ProductList
        loading={boolean('loading', false)}
        loadingMore={boolean('loadingMore', false)}
        items={new Array(number('# items', 7)).fill(null).map(() => ({
            image: {
                alt: '',
                src: require('../../../public/images/product-item-sample.jpg'),
            },
            price: {
                regular: 49.99,
                special: 39.99,
                label: 'Starting at',
            },
            title: {
                text: 'Circle Hooded Ice Flee',
            },
            colors: [
                { label: 'brown', value: 'brown' },
                { label: 'gray', value: 'gray' },
                { label: 'black', value: 'black' },
                { label: 'blue', value: 'blue' },
            ],
        }))}
    />
))
