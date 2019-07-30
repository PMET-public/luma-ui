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
    sku: {
        label: 'SKU. VSK12-LA',        
    },
    images: new Array(5).fill({
        alt: '',
        src: require('../../../public/images/product-item-sample.jpg'),
    }),
    swatches: [
        {
            title: {
                label: 'Blue',
                as: 'h3',
            },
            type: 'thumb',
            props: {
                items: [
                    {
                        active: true,
                        image: {
                            alt: '',
                            src: require('../../../public/images/product-item-sample.jpg'),
                            width: 4,
                            height: 5,
                        },
                    },
                    {
                        disabled: true,
                        image: {
                            alt: '',
                            src: require('../../../public/images/product-item-sample.jpg'),
                            width: 4,
                            height: 5,
                        },
                    },
                    {
                        image: {
                            alt: '',
                            src: require('../../../public/images/product-item-sample.jpg'),
                            width: 4,
                            height: 5,
                        },
                    },
                    {
                        image: {
                            alt: '',
                            src: require('../../../public/images/product-item-sample.jpg'),
                            width: 4,
                            height: 5,
                        },
                    },
                ],
            },
        },
        {
            title: {
                label: 'Size',
                as: 'h3',
            },
            type: 'text',
            props: {
                items: [
                    { label: 'XS', disabled: true },
                    { label: 'S' },
                    { label: 'M', active: true },
                    { label: 'L' },
                    { label: 'XL' },
                ],
            },
        },
    ],
    assembler: {
        components: [
            {
                name: 'ProductsCarousel',
                props: {
                    title: {
                        as: 'h3',
                        label: 'You may also like',
                    },
                    items: new Array(6).fill({
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
