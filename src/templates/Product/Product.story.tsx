import React from 'react'
import Product from '../Product'
import { storiesOf } from '@storybook/react'
import App from '../../components/App'
import { AppMockData } from '../../components/App/App.story'
import { ProductProps } from './Product'

const ProductMockData: ProductProps = {
    buttons: [{ text: 'Add to Cart', fill: true }, { text: 'Add to Favorite' }],
    breadcrumbs: {
        items: [
            {
                text: 'Women',
                as: 'a',
                href: '#',
            },
            {
                text: 'Hoodies & Sweatshirts',
                as: 'a',
                href: '#',
            },
        ],
    },
    title: {
        text: 'Circle Hooded Ice Flee',
    },
    price: {
        regular: 49.99,
        special: 39.99,
        label: 'Starting at',
    },
    sku: {
        text: 'SKU. VSK12-LA',
    },
    images: new Array(5).fill({
        alt: '',
        src: require('../../../public/images/product-item-sample.jpg'),
    }),
    swatches: [
        {
            title: {
                text: 'Blue',
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
                text: 'Size',
                as: 'h3',
            },
            type: 'text',
            props: {
                items: [
                    { text: 'XS', disabled: true },
                    { text: 'S' },
                    { text: 'M', active: true },
                    { text: 'L' },
                    { text: 'XL' },
                ],
            },
        },
    ],
    description: {
        components: [
            {
                name: 'Html',
                props: {
                    source: `<p>The Isadora Skirt has just the right amount of flounce to make it playful and yet still chic. Lovely wrap detail and draped layering in the front add a bit of sophistication to the lush print. </p><p>Features:</p><ul><li>Side zip</li><li>Length: 17\"</li><li>Hits mid thigh</li><li>Set on waist</li><li>Dry clean recommended</li></ul> `,
                },
            },
        ],
    },
    pageBuilder: {
        components: [
            {
                name: 'ProductCarousel',
                props: {
                    title: {
                        as: 'h3',
                        text: 'You may also like',
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
                            regular: 49.99,
                            special: 39.99,
                            label: 'Starting at',
                        },
                        title: {
                            text: 'Circle Hooded Ice Flee',
                        },
                        colors: [{ value: 'brown' }, { value: 'gray' }, { value: 'black' }, { value: 'blue' }],
                    }),
                },
            },
        ],
    },
}

storiesOf('📑 Templates/Product', module).add(
    'Default',
    () => (
        <App {...AppMockData}>
            <Product {...ProductMockData} />
        </App>
    ),
    {
        theme: {
            layout: 'fullPage',
        },
    }
)
