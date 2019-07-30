import React from 'react'
import ProductList from './'
import { storiesOf } from '@storybook/react'
import { ProductListProps } from './ProductList'
import App from '../App'
import { AppMockData } from '../App/App.story'

export const ProductListMockData: ProductListProps = {
    search: {
        value: 'Sweater',
        count: 10,
        clearButton: false,
    },
    filters: {
        label: 'Filters',
        open: false,
        buttons: [
            { text: 'Done', fill: true },
        ],
        props: {
            groups: [
                {
                    title: {
                        text: 'Fashion',
                    },
                    items: [
                        {
                            text: '14K Gold',
                            count: 7,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Acrylic',
                            count: 68,
                            as: 'a',
                            href: '#',
                            active: true,
                        },
                        {
                            text: 'Cashmere',
                            count: 68,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Sterling Silver',
                            count: 5,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Cotton',
                            count: 437,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Linen',
                            count: 187,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Leather',
                            count: 16,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Nylon',
                            count: 119,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Organic Cotton',
                            count: 310,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Polyester',
                            count: 140,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Rayon',
                            count: 221,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Silk',
                            count: 89,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Spandex',
                            count: 220,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Viscose',
                            count: 361,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Wool',
                            count: 51,
                            as: 'a',
                            href: '#',
                        },
                    ],
                },
                {
                    title: {
                        text: 'Style',
                    },
                    items: [
                        {
                            text: 'Above Knee',
                            count: 195,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Below Knee',
                            count: 68,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Ankle Length',
                            count: 85,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Halter Top',
                            count: 34,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Short Sleeve',
                            count: 204,
                            as: 'a',
                            href: '#',
                            active: true,
                        },
                        {
                            text: 'Sleeveless',
                            count: 170,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Long Sleeve',
                            count: 102,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: '3/4 Sleeve',
                            count: 102,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Slim Fit',
                            count: 38,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Wide Leg',
                            count: 51,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Capri',
                            count: 21,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Full Length',
                            count: 255,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Straight Leg',
                            count: 51,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Open Front',
                            count: 119,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Crew',
                            count: 153,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Hooded',
                            count: 17,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Scoopneck',
                            count: 51,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'V-neck',
                            count: 34,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Button-down',
                            count: 51,
                            as: 'a',
                            href: '#',
                        },
                    ],
                },
                {
                    title: {
                        text: 'Color',
                    },
                    items: [
                        {
                            text: 'Gold',
                            count: 72,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Peach',
                            count: 156,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Khaki',
                            count: 144,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Silver',
                            count: 6,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Lilac',
                            count: 223,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Rain',
                            count: 223,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Mint',
                            count: 134,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Lily',
                            count: 97,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Latte',
                            count: 91,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'Cocoa',
                            count: 16,
                            as: 'a',
                            href: '#',
                        },
                    ],
                },
                {
                    title: {
                        text: 'Has Video',
                    },
                    items: [
                        {
                            text: 'Yes',
                            count: 18,
                            as: 'a',
                            href: '#',
                        },
                        {
                            text: 'No',
                            count: 1133,
                            as: 'a',
                            href: '#',
                        },
                    ],
                },
            ],
        },
    },
    products: new Array(10).fill(true).map(() => ({
        image: {
            alt: '',
            src: require('../../../public/images/product-item-sample.jpg'),
        },
        price: {
            price: '$49.99',
            priceSpecial: '$39.99',
            priceLabel: 'Starting at',
        },
        title: {
            text: 'Circle Hooded Ice Flee',
        },
        colors: [
            { value: 'brown' }, 
            { value: 'gray' }, 
            { value: 'black' }, 
            { value: 'blue' },
        ],
    })),
}

storiesOf('📑 Templates/ProductList', module)
    .add('Default', () => (
        <App {...AppMockData}>
            <ProductList {...ProductListMockData} />
        </App>
    ))
