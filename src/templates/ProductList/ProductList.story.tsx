import React from 'react'
import ProductList from './'
import { storiesOf } from '@storybook/react'
import { ProductListProps } from './ProductList'
import { number } from '@storybook/addon-knobs'
import App from '../App'
import { AppMockData } from '../App/App.story'

export const ProductListMockData: ProductListProps = {
    search: {
        value: 'Sweater',
        count: 10,
    },
    products: new Array(number('# items', 10)).fill(true).map(() => ({
        image: {
            alt: '',
            src: require('../../../public/images/product-item-sample.jpg'),
            height: 650,
        },
        price: "$49.99",
        priceSpecial: "$39.99",
        title: "Circle Hooded Ice Flee",
        colors: ['brown', 'gray', 'black', 'blue'],
    })),
}

storiesOf('📑 Templates/ProductList', module)
    .add('Default', () => (
        <App {...AppMockData}>
            <ProductList {...ProductListMockData} />
        </App>
    ))
