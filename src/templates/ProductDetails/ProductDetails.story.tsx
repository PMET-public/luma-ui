import React from 'react'
import ProductDetails from './'
import { storiesOf } from '@storybook/react'
import App from '../App'
import { AppMockData } from '../App/App.story'
import { ProductDetailsProps } from './ProductDetails'

const ProductDetailsMockData: ProductDetailsProps = {
    buttons: [
        { label: 'Add to Cart', fill: true },
        { label: 'Add to Favorite' },
    ],
    category: {
        label: 'Hoodies & Sweatshirts',
    },
    title: {
        label: 'Circle Hooded Ice Flee',
    },
    price: {
        price: '$49.99',
        priceSpecial: '$39.99',
        priceLabel: 'Starting at',
    },
    images: new Array(5).fill({
        alt: '',
        src: require('../../../public/images/product-item-sample.jpg'),
    }),
    assembler: {
        components: [
            {
                name: 'Banner',
                props: {
                    image: {
                        alt: '',
                        src: require('../../../public/images/banner-2.jpg'),
                        height: 650,
                        width: '100%',
                    },
                    titles: [
                        { title: 'Twice around, twice as nice', large: true },
                        { title: 'Find conscientious, comfy clothing in our eco-friendly collection' },
                    ],
                    position: 'bottom',
                    buttons: [
                        { label: 'Shop Performance', fill: true, link: { href: '#' } },
                    ],
                },
            },
            {
                name: 'ProductsCarousel',
                props: {
                    title: {
                        as: 'h3',
                        label: 'Summer Sale',
                    },
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
                        title: {
                            label: 'Circle Hooded Ice Flee',
                        },
                        colors: [
                            { value: 'brown' },
                            { value: 'gray' },
                            { value: 'black' },
                            { value: 'blue' },

                        ],
                    }),
                },
            },
        ],
    },
}

storiesOf('📑 Templates/ProductDetails', module)
    .add('Default', () => (
        <App {...AppMockData}>
            <ProductDetails {...ProductDetailsMockData} />
        </App>
    ))
