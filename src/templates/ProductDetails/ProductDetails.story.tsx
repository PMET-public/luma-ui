import React from 'react'
import ProductDetails from './'
import { storiesOf } from '@storybook/react'
import App from '../App'
import { AppMockData } from '../App/App.story'

const ProductDetailsMockData = {
    buttons: [
        { label: 'Add to Cart', fill: true },
        { label: 'Add to Favorite' },
    ],
    category: 'Hoodies & Sweatshirts',
    title: 'Circle Hooded Ice Flee,',
    badge: 'New Arrival',
    price: {
        price: '$49.99',
        priceSpecial: '$39.99',
        priceLabel: 'Starting at',
    },
    images: new Array(5).fill({
        alt: '',
        src: require('../../../public/images/product-item-sample.jpg'),
    }),
    related:
    {
        content: {
            title: 'You might also like',
            items: new Array(10).fill({
                link: { href: '#' },
                image: {
                    alt: '',
                    src: require('../../../public/images/product-item-sample.jpg'),
                    width: 4,
                    height: 5,
                },
                price: {
                    price: '$49.99',
                    priceSpecial: '$39.99',
                    priceLabel: 'Starting at',
                },
                title: 'Circle Hooded Ice Flee',
                colors: ['brown', 'gray', 'black', 'blue'],
            }),
        },
    },
}

storiesOf('📑 Templates/ProductDetails', module)
    .add('Default', () => (
        <App {...AppMockData}>
            <ProductDetails {...ProductDetailsMockData} />
        </App>
    ))
