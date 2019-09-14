import React from 'react'
import Product from '../Product'
import { storiesOf } from '@storybook/react'
import App from '../../components/App'
import { AppMockData } from '../../components/App/App.story'
import { ProductProps } from './Product'
import { files } from '@storybook/addon-knobs'
import { PageBuilderBannerMock, PageBuilderRowFullBleedMock } from '../../components/PageBuilder/PageBuilder.story'

const ProductMockData = (): ProductProps => ({
    buttons: [{ text: 'Add to Cart' }, { text: 'Add to Favorite', secondary: true }],
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
    pageBuilder: {
        html: PageBuilderRowFullBleedMock(PageBuilderBannerMock()),
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
