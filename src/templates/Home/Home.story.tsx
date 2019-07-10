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
                image: require('../../../public/images/fashion-thumb1.jpg'),
                label: 'Women',
                link: { href: '#story1' },
            },
            { 
                image: require('../../../public/images/fashion-thumb2.jpg'),
                label: 'Men',
                link: { href: '#story2' },
            },
            { 
                image: require('../../../public/images/fashion-thumb3.jpg'),
                label: 'Gear',
                link: { href: '#story3' },
            },
            { 
                image: require('../../../public/images/fashion-thumb4.jpg'),
                label: 'Training',
                link: { href: '#story4' },
            },
            { 
                image: require('../../../public/images/fashion-thumb4.jpg'),
                label: 'Sale',
                link: { href: '#story4' },
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
                    mobile: require('../../../public/images/banner-2.1--mobile.jpg'),
                },
                titles: [
                    { title: 'Twice around, twice as nice', large: true },
                    { title: 'Find conscientious, comfy clothing in our eco-friendly collection' },
                ],
                position: 'bottom',
                buttons: [
                    { label: 'Shop Performance', primary: true, link: { href: '#performance' } },
                ],
            },
        },
        {
            title: 'New Arrivals',
            type: 'carousel',
            content: [
                { 
                    link: { href: '#story1' },
                    image: require('../../../public/images/product-item-sample.jpg'),
                    price: '$49.99',
                    priceSpecial: '$39.99',
                    title: 'Circle Hooded Ice Flee',
                    colors: ['brown', 'gray', 'black', 'blue'],
                },
                { 
                    link: { href: '#story1' },
                    image: require('../../../public/images/product-item-sample.jpg'),
                    price: '$49.99',
                    priceSpecial: '$39.99',
                    title: 'Circle Hooded Ice Flee',
                    colors: ['brown', 'gray', 'black', 'blue'],
                },
                { 
                    link: { href: '#story1' },
                    image: require('../../../public/images/product-item-sample.jpg'),
                    price: '$49.99',
                    priceSpecial: '$39.99',
                    title: 'Circle Hooded Ice Flee',
                    colors: ['brown', 'gray', 'black', 'blue'],
                },
                { 
                    link: { href: '#story1' },
                    image: require('../../../public/images/product-item-sample.jpg'),
                    price: '$49.99',
                    priceSpecial: '$39.99',
                    title: 'Circle Hooded Ice Flee',
                    colors: ['brown', 'gray', 'black', 'blue'],
                },
                { 
                    link: { href: '#story1' },
                    image: require('../../../public/images/product-item-sample.jpg'),
                    price: '$49.99',
                    priceSpecial: '$39.99',
                    title: 'Circle Hooded Ice Flee',
                    colors: ['brown', 'gray', 'black', 'blue'],
                },
            ],
        },
        {
            title: 'Summer Sale',
            type: 'carousel',
            content: [
                { 
                    link: { href: '#story1' },
                    image: require('../../../public/images/product-item-sample.jpg'),
                    price: '$49.99',
                    priceSpecial: '$39.99',
                    title: 'Circle Hooded Ice Flee',
                    colors: ['brown', 'gray', 'black', 'blue'],
                },
                { 
                    link: { href: '#story1' },
                    image: require('../../../public/images/product-item-sample.jpg'),
                    price: '$49.99',
                    priceSpecial: '$39.99',
                    title: 'Circle Hooded Ice Flee',
                    colors: ['brown', 'gray', 'black', 'blue'],
                },
                { 
                    link: { href: '#story1' },
                    image: require('../../../public/images/product-item-sample.jpg'),
                    price: '$49.99',
                    priceSpecial: '$39.99',
                    title: 'Circle Hooded Ice Flee',
                    colors: ['brown', 'gray', 'black', 'blue'],
                },
                { 
                    link: { href: '#story1' },
                    image: require('../../../public/images/product-item-sample.jpg'),
                    price: '$49.99',
                    priceSpecial: '$39.99',
                    title: 'Circle Hooded Ice Flee',
                    colors: ['brown', 'gray', 'black', 'blue'],
                },
                { 
                    link: { href: '#story1' },
                    image: require('../../../public/images/product-item-sample.jpg'),
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
