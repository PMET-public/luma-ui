import React from 'react'
import Product from '../Product'
import { storiesOf } from '@storybook/react'
import App from '../../components/App'
import { AppMockData } from '../../components/App/App.story'
import { ProductProps } from './Product'
import { files } from '@storybook/addon-knobs'
// import { PageBuilderRowFullBleedMock, PageBuilderTextMock } from '../../components/PageBuilder/PageBuilder.story'

const ProductMockData = (): ProductProps => ({
    buttons: [{ text: 'Add to Cart', type: 'submit' }, { text: 'Add to Favorite', secondary: true }],
    categories: {
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
    gallery: new Array(5).fill({
        src: {
            desktop: files(
                'Image',
                '.jpg, .jpeg, .png',
                [require('../../../public/images/product-item-sample.jpg')],
                'Product Details'
            )[0],
            mobile: files(
                'Image (Mobile)',
                '.jpg, .jpeg, .png',
                [require('../../../public/images/product-item-sample.jpg')],
                'Product Details'
            )[0],
        },
    }),
    options: [
        {
            title: {
                text: 'Color',
                as: 'h3',
            },
            type: 'thumb',
            required: true,
            swatches: {
                groupId: 'color',
                items: [
                    {
                        value: 1,
                        image: {
                            alt: '',
                            src: require('../../../public/images/product-item-sample.jpg'),
                            width: 4,
                            height: 5,
                        },
                    },
                    {
                        value: 2,
                        disabled: true,
                        image: {
                            alt: '',
                            src: require('../../../public/images/product-item-sample.jpg'),
                            width: 4,
                            height: 5,
                        },
                    },
                    {
                        value: 3,
                        image: {
                            alt: '',
                            src: require('../../../public/images/product-item-sample.jpg'),
                            width: 4,
                            height: 5,
                        },
                    },
                    {
                        value: 4,
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
            required: true,
            swatches: {
                groupId: 'size',
                items: [{ text: 'XS', disabled: true }, { text: 'S' }, { text: 'M' }, { text: 'L' }, { text: 'XL' }],
            },
        },
    ],
    shortDescription: '',
    description: {
        html:
            '<p>With abutted seams and moisture wicking capacity, the Maya Tunic lets you work out in complete comfort.</p>\n<p>&bull; Mint green heather tunic-style tank. <br />&bull; Wrapped back with cut out detail.<br />&bull; Drawcord detail at end.<br />&bull; Abutted seams.</p>',
    },
})

storiesOf('📑 Templates/Product', module).add(
    'Default',
    () => (
        <App {...AppMockData}>
            <Product {...ProductMockData()} />
        </App>
    ),
    {
        theme: {
            layout: 'fullPage',
        },
    }
)
