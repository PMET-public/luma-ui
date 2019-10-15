import React from 'react'
import Product from '../Product'
import { storiesOf } from '@storybook/react'
import App from '../../components/App'
import { AppMockData } from '../../components/App/App.story'
import { ProductProps } from './Product'
import { files } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
// import { PageBuilderRowFullBleedMock, PageBuilderTextMock } from '../../components/PageBuilder/PageBuilder.story'

const ProductMockData = (): ProductProps => ({
    addToCartButton: { text: 'Add to Cart', type: 'submit' },
    onAddToCart: action('onAddToCart'),
    onChange: action('onOptionChange'),
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
            type: 'thumb',
            required: true,
            label: {
                text: 'Color',
            },
            swatches: {
                name: 'color',
                type: 'radio',
                items: [
                    {
                        defaultValue: '1',
                        image: {
                            alt: '',
                            src: require('../../../public/images/product-item-sample.jpg'),
                            width: 4,
                            height: 5,
                        },
                    },
                    {
                        defaultValue: '2',
                        disabled: true,
                        image: {
                            alt: '',
                            src: require('../../../public/images/product-item-sample.jpg'),
                            width: 4,
                            height: 5,
                        },
                    },
                    {
                        defaultValue: '3',
                        image: {
                            alt: '',
                            src: require('../../../public/images/product-item-sample.jpg'),
                            width: 4,
                            height: 5,
                        },
                    },
                    {
                        defaultValue: '4',
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
            type: 'text',
            required: true,
            label: {
                text: 'Size',
            },
            swatches: {
                name: 'size',
                items: [
                    { text: 'XS', disabled: true, defaultValue: '1' },
                    { text: 'S', defaultValue: '3' },
                    { text: 'M', defaultValue: '4' },
                    { text: 'L', defaultValue: '5' },
                    { text: 'XL', defaultValue: '6' },
                ],
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
