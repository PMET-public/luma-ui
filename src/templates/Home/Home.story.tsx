import React from 'react'
import Home from './'
import { storiesOf } from '@storybook/react'
import { HomeProps } from './Home'
import App from '../App'
import { AppMockData } from '../App/App.story'

export const HomeMockData: HomeProps = {
    stories: {
        label: 'Categories',
        items: [
            { 
                label: 'Women',
                link: { href: '#story1' },
                image: {
                    alt: 'Women',
                    src: require('../../../public/images/fashion-thumb1.jpg'),
                },
            },
            { 
                label: 'Men',
                link: { href: '#story2' },
                image: {
                    alt: 'Men',
                    src: require('../../../public/images/fashion-thumb2.jpg'),
                },
            },
            { 
                label: 'Gear',
                link: { href: '#story3' },
                image: {
                    alt: 'Gear',
                    src: require('../../../public/images/fashion-thumb3.jpg'),
                },
            },
            { 
                label: 'Training',
                link: { href: '#story4' },
                image: {
                    alt: 'Training',
                    src: require('../../../public/images/fashion-thumb4.jpg'),
                },
            },
            { 
                label: 'Sale',
                link: { href: '#story4' },
                image: {
                    alt: 'Sale',
                    src: require('../../../public/images/fashion-thumb5.jpg'),
                },
            },
        ],
    },

    sections: [
        {
            type: 'banner',
            content: {
                image: {
                    alt: '',
                    src: require('../../../public/images/banner-2.jpg'),
                    height: 700,
                    width: '100%',
                },
                titles: [
                    { title: 'Twice around, twice as nice', large: true },
                    { title: 'Find conscientious, comfy clothing in our eco-friendly collection' },
                ],
                position: 'bottom',
                buttons: [
                    { label: 'Shop Performance', fill: true, link: { href: '#performance' } },
                ],
            },
        },
        {
            title: 'New Arrivals',
            type: 'carousel',
            content: [
                { 
                    link: { href: '#story1' },
                    image: {
                        alt: '',
                        src: require('../../../public/images/product-item-sample.jpg'),
                    },
                    price: '$49.99',
                    priceSpecial: '$39.99',
                    title: 'Circle Hooded Ice Flee',
                    colors: ['brown', 'gray', 'black', 'blue'],
                },
                { 
                    link: { href: '#story1' },
                    image: {
                        alt: '',
                        src: require('../../../public/images/product-item-sample.jpg'),
                    },
                    price: '$49.99',
                    priceSpecial: '$39.99',
                    title: 'Circle Hooded Ice Flee',
                    colors: ['brown', 'gray', 'black', 'blue'],
                },
                { 
                    link: { href: '#story1' },
                    image: {
                        alt: '',
                        src: require('../../../public/images/product-item-sample.jpg'),
                    },
                    price: '$49.99',
                    priceSpecial: '$39.99',
                    title: 'Circle Hooded Ice Flee',
                    colors: ['brown', 'gray', 'black', 'blue'],
                },
                { 
                    link: { href: '#story1' },
                    image: {
                        alt: '',
                        src: require('../../../public/images/product-item-sample.jpg'),
                    },
                    price: '$49.99',
                    priceSpecial: '$39.99',
                    title: 'Circle Hooded Ice Flee',
                    colors: ['brown', 'gray', 'black', 'blue'],
                },
                { 
                    link: { href: '#story1' },
                    image: {
                        alt: '',
                        src: require('../../../public/images/product-item-sample.jpg'),
                    },
                    price: '$49.99',
                    priceSpecial: '$39.99',
                    title: 'Circle Hooded Ice Flee',
                    colors: ['brown', 'gray', 'black', 'blue'],
                },
            ],
        },

    ],
}

storiesOf('📑 Templates/Home', module)
    .add('Default', () => (
        <App {...AppMockData}>
            <Home {...HomeMockData} />
        </App>
    ))
