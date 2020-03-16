import React from 'react'
import ProductCarousel from '.'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { number, boolean } from '@storybook/addon-knobs'

storiesOf('📦 Components/ProductCarousel', module).add('Default', () => {
    const props = {
        loading: boolean('loading', false),
        items: new Array(number('Products Qty.', 4)).fill({
            image: {
                alt: '',
                src: require('../../../public/images/product-item-sample.jpg'),
            },
            onClick: action('onClick'),
            price: {
                regular: 49.99,
                special: 39.99,
                label: 'Starting at',
            },
            title: {
                text: 'Circle Hooded Ice Flee',
            },
            // colors: [{ value: 'brown' }, { value: 'gray' }, { value: 'black' }, { value: 'blue' }],
        }),
    }

    return <ProductCarousel {...props} />
})
