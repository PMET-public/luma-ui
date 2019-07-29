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
    breadcrumbs: {
        items: [
            {
                label: 'Women',
                as: 'a',
                href: '#',
            },
            {
                label: 'Hoodies & Sweatshirts',
                as: 'a',
                href: '#',
            },
        ],
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
                name: "Accordion",
                props: {
                    items: [
                        {
                            label: 'Hola',
                            children: 'Hi',
                        },
                        {
                            label: 'Hola',
                            children: 'Hi',
                        },
                    ],
                },
            },
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
                        { label: 'Twice around, twice as nice', large: true },
                        { label: 'Find conscientious, comfy clothing in our eco-friendly collection' },
                    ],
                    position: 'bottom',
                    buttons: [
                        { label: 'Shop Performance', fill: true, link: { href: '#' } },
                    ],
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
