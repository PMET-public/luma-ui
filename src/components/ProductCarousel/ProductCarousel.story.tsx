import React from 'react'
import ProductCarousel from '.'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('📦 Components/ProductCarousel', module).add('Default', () => {
    const props = {
        loading: boolean('loading', false),
        dots: true,

        items: new Array(10).fill({
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
            colors: [{ value: 'brown' }, { value: 'gray' }, { value: 'black' }, { value: 'blue' }],
        }),
    }

    return <ProductCarousel {...props} />
})
