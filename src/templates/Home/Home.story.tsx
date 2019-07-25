import React from 'react'
import Home from './'
import { storiesOf } from '@storybook/react'
import { HomeProps } from './Home'
import App from '../App'
import { AppMockData } from '../App/App.story'
import Link from '../../components/Link'

export const HomeMockData: HomeProps = {
    assembler: {
        components: [
            {
                name: 'BubbleCarousel',
                props: {
                    label: 'Categories',
                    items: [
                        {
                            label: 'Women',
                            as: Link,
                            href: '#',
                            image: {
                                alt: 'Women',
                                src: require('../../../public/images/fashion-thumb1.jpg'),
                            },
                        },
                        {
                            label: 'Men',
                            as: Link,
                            href: '#',
                            image: {
                                alt: 'Men',
                                src: require('../../../public/images/fashion-thumb2.jpg'),
                            },
                        },
                        {
                            label: 'Gear',
                            as: Link,
                            href: '#',
                            image: {
                                alt: 'Gear',
                                src: require('../../../public/images/fashion-thumb3.jpg'),
                            },
                        },
                        {
                            label: 'Training',
                            as: Link,
                            href: '#',
                            image: {
                                alt: 'Training',
                                src: require('../../../public/images/fashion-thumb4.jpg'),
                            },
                        },
                        {
                            label: 'Sale',
                            as: Link,
                            href: '#',
                            image: {
                                alt: 'Sale',
                                src: require('../../../public/images/fashion-thumb5.jpg'),
                            },
                        },
                    ],
                },
            },
            {
                name: 'BubbleCarousel',
                props: {
                    label: 'Categories',

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
                        { title: 'Twice around, twice as nice', large: true },
                        { title: 'Find conscientious, comfy clothing in our eco-friendly collection' },
                    ],
                    position: 'bottom',
                    buttons: [
                        { label: 'Shop Performance', fill: true, link: { href: '#' } },
                    ],
                },
            },
            {
                name: 'ProductsCarousel',
                props: {
                    title: 'New Arrivals',
                    items: new Array(10).fill({
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
                        title: 'Circle Hooded Ice Flee',
                        colors: ['brown', 'gray', 'black', 'blue'],
                    }),
                },
            },
            {
                name: 'ProductsCarousel',
                props: {
                    title: 'Summer Sale',
                    items: new Array(10).fill({
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
                        title: 'Circle Hooded Ice Flee',
                        colors: ['brown', 'gray', 'black', 'blue'],
                    }),
                },
            },
        ],
    },
}

storiesOf('📑 Templates/Home', module)
    .add('Default', () => (
        <App {...AppMockData}>
            <Home {...HomeMockData} />
        </App>
    ))
