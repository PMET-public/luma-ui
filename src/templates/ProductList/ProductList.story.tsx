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
            { label: 'Done', fill: true },
        ],
        items: [
            {
                label: 'Sort By',
                items: [
                    {
                        label: 'Price: High-Low',
                        link: { href: '#' },
                    },
                    {
                        label: 'Price: Low-High',
                        link: { href: '#' },
                    },
                ],
            },
            {
                label: 'Category',

                items: [
                    {
                        label: 'Bottoms',
                        link: { href: '3#' },
                        count: 24,
                    },
                    {
                        label: 'Tops',
                        link: { href: '#' },
                        count: 24,
                    },
                    {
                        label: 'Dresses',
                        link: { href: '#' },
                        count: 12,
                    },
                    {
                        label: 'Accessories',
                        link: { href: '#' },
                        count: 22,
                    },
                    {
                        label: 'Shop The Look',
                        link: { href: '#' },
                        count: 10,
                    },
                ],
            },
            {
                label: 'Fashion',
                items: [
                    {
                        label: '14K Gold',
                        link: { href: '#', alt: '' },
                        count: 7,
                    },
                    {
                        label: 'Acrylic',
                        link: { href: '#', alt: '' },
                        count: 68,
                        active: true,
                    },
                    {
                        label: 'Cashmere',
                        link: { href: '#', alt: '' },
                        count: 68,
                    },
                    {
                        label: 'Sterling Silver',
                        link: { href: '#', alt: '' },
                        count: 5,
                    },
                    {
                        label: 'Cotton',
                        link: { href: '#', alt: '' },
                        count: 437,
                    },
                    {
                        label: 'Linen',
                        link: { href: '#', alt: '' },
                        count: 187,
                    },
                    {
                        label: 'Leather',
                        link: { href: '#', alt: '' },
                        count: 16,
                    },
                    {
                        label: 'Nylon',
                        link: { href: '#', alt: '' },
                        count: 119,
                    },
                    {
                        label: 'Organic Cotton',
                        link: { href: '#', alt: '' },
                        count: 310,
                    },
                    {
                        label: 'Polyester',
                        link: { href: '#', alt: '' },
                        count: 140,
                    },
                    {
                        label: 'Rayon',
                        link: { href: '#', alt: '' },
                        count: 221,
                    },
                    {
                        label: 'Silk',
                        link: { href: '#', alt: '' },
                        count: 89,
                    },
                    {
                        label: 'Spandex',
                        link: { href: '#', alt: '' },
                        count: 220,
                    },
                    {
                        label: 'Viscose',
                        link: { href: '#', alt: '' },
                        count: 361,
                    },
                    {
                        label: 'Wool',
                        link: { href: '#', alt: '' },
                        count: 51,
                    },
                ],
            },
            {
                label: 'Style',
                items: [
                    {
                        label: 'Above Knee',
                        link: { href: '#', alt: '' },
                        count: 195,
                    },
                    {
                        label: 'Below Knee',
                        link: { href: '#', alt: '' },
                        count: 68,
                    },
                    {
                        label: 'Ankle Length',
                        link: { href: '#', alt: '' },
                        count: 85,
                    },
                    {
                        label: 'Halter Top',
                        link: { href: '#', alt: '' },
                        count: 34,
                    },
                    {
                        label: 'Short Sleeve',
                        link: { href: '#', alt: '' },
                        count: 204,
                        active: true,
                    },
                    {
                        label: 'Sleeveless',
                        link: { href: '#', alt: '' },
                        count: 170,
                    },
                    {
                        label: 'Long Sleeve',
                        link: { href: '#', alt: '' },
                        count: 102,
                    },
                    {
                        label: '3/4 Sleeve',
                        link: { href: '#', alt: '' },
                        count: 102,
                    },
                    {
                        label: 'Slim Fit',
                        link: { href: '#', alt: '' },
                        count: 38,
                    },
                    {
                        label: 'Wide Leg',
                        link: { href: '#', alt: '' },
                        count: 51,
                    },
                    {
                        label: 'Capri',
                        link: { href: '#', alt: '' },
                        count: 21,
                    },
                    {
                        label: 'Full Length',
                        link: { href: '#', alt: '' },
                        count: 255,
                    },
                    {
                        label: 'Straight Leg',
                        link: { href: '#', alt: '' },
                        count: 51,
                    },
                    {
                        label: 'Open Front',
                        link: { href: '#', alt: '' },
                        count: 119,
                    },
                    {
                        label: 'Crew',
                        link: { href: '#', alt: '' },
                        count: 153,
                    },
                    {
                        label: 'Hooded',
                        link: { href: '#', alt: '' },
                        count: 17,
                    },
                    {
                        label: 'Scoopneck',
                        link: { href: '#', alt: '' },
                        count: 51,
                    },
                    {
                        label: 'V-neck',
                        link: { href: '#', alt: '' },
                        count: 34,
                    },
                    {
                        label: 'Button-down',
                        link: { href: '#', alt: '' },
                        count: 51,
                    },
                ],
            },
            {
                label: 'Color',
                items: [
                    {
                        label: 'Gold',
                        link: { href: '#', alt: '' },
                        count: 72,
                    },
                    {
                        label: 'Peach',
                        link: { href: '#', alt: '' },
                        count: 156,
                    },
                    {
                        label: 'Khaki',
                        link: { href: '#', alt: '' },
                        count: 144,
                    },
                    {
                        label: 'Silver',
                        link: { href: '#', alt: '' },
                        count: 6,
                    },
                    {
                        label: 'Lilac',
                        link: { href: '#', alt: '' },
                        count: 223,
                    },
                    {
                        label: 'Rain',
                        link: { href: '#', alt: '' },
                        count: 223,
                    },
                    {
                        label: 'Mint',
                        link: { href: '#', alt: '' },
                        count: 134,
                    },
                    {
                        label: 'Lily',
                        link: { href: '#', alt: '' },
                        count: 97,
                    },
                    {
                        label: 'Latte',
                        link: { href: '#', alt: '' },
                        count: 91,
                    },
                    {
                        label: 'Cocoa',
                        link: { href: '#', alt: '' },
                        count: 16,
                    },
                ],
            },
            {
                label: 'Has Video',
                items: [
                    {
                        label: 'Yes',
                        link: { href: '#', alt: '' },
                        count: 18,
                    },
                    {
                        label: 'No',
                        link: { href: '#', alt: '' },
                        count: 1133,
                    },
                ],
            },
        ],
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
        title: 'Circle Hooded Ice Flee',
        colors: ['brown', 'gray', 'black', 'blue'],
    })),
}

storiesOf('📑 Templates/ProductList', module)
    .add('Default', () => (
        <App {...AppMockData}>
            <ProductList {...ProductListMockData} />
        </App>
    ))
