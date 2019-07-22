import React from 'react'
import ProductDetails from './'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import App from '../App'
import { AppMockData } from '../App/App.story'

const ProductDetailsMockData = {
    category: text('category', 'Hoodies & Sweatshirts'),
    title: text('title', 'Circle Hooded Ice Flee'),
    badge: text('badge', 'New Arrival'),
    price: {
        price: '$49.99',
        priceSpecial: '$39.99',
        priceLabel: 'Starting at',
    },
    images: new Array(5).fill({
        alt: '',
        src: require('../../../public/images/product-item-sample.jpg'),
    }),  
}

storiesOf('📑 Templates/ProductDetails', module)
    .add('Default', () => (
        <App {...AppMockData}>
            <ProductDetails {...ProductDetailsMockData} />
        </App>
    ))
