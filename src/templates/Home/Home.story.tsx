import React from 'react'
import Home from './'
import { storiesOf } from '@storybook/react'
import { HomeProps } from './Home'
import App from '../App'
import { AppMockData } from '../App/App.story'

export const HomeMockData: HomeProps = {
    assembler: {
        components: [
            {
                name: 'BubbleCarousel',
                props: {
                    label: 'Categories',
                    hideOnBreakpoint: 'medium-screen',
                    items: [
                        {
                            label: 'Women',
                            href: '#',
                            target: 'blank',
                            image: {
                                alt: 'Women',
                                src: require('../../../public/images/fashion-thumb1.jpg'),
                            },
                        },
                        {
                            label: 'Men',
                            as: 'a',
                            href: '#',
                            image: {
                                alt: 'Men',
                                src: require('../../../public/images/fashion-thumb2.jpg'),
                            },
                        },
                        {
                            label: 'Gear',
                            as: 'a',
                            href: '#',
                            image: {
                                alt: 'Gear',
                                src: require('../../../public/images/fashion-thumb3.jpg'),
                            },
                        },
                        {
                            label: 'Training',
                            as: 'a',
                            href: '#',
                            image: {
                                alt: 'Training',
                                src: require('../../../public/images/fashion-thumb4.jpg'),
                            },
                        },
                        {
                            label: 'Sale',
                            as: 'a',
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
                name: 'Banner',
                props: {
                    image: {
                        alt: '',
                        src: require('../../../public/images/banner-2.jpg'),
                        height: 650,
                        width: '100%',
                    },
                    titles: [
                        { label: 'Twice around, twice as nice', large: true },
                        { label: 'Find conscientious, comfy clothing in our eco-friendly collection' },
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
                    title: {
                        as: 'h3',
                        label: 'New Arrivals',
                    },
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
            {
                name: 'ProductsCarousel',
                props: {
                    title: {
                        as: 'h3',
                        label: 'Summer Sale',
                    },
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

storiesOf('📑 Templates/Home', module)
    .add('Default', () => (
        <App {...AppMockData}>
            <Home {...HomeMockData} />
        </App>
    ))
