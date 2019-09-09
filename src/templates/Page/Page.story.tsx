import React from 'react'
import Page from '../Page'
import { storiesOf } from '@storybook/react'
import { PageProps } from './Page'
import App from '../../components/App'
import { AppMockData } from '../../components/App/App.story'

export const PageMockData: PageProps = {
    pageBuilder: {
        components: [
            {
                name: 'BubbleCarousel',
                hideOnBreakpoint: 'medium',
                props: {
                    text: 'Categories',
                    items: [
                        {
                            text: 'Women',
                            href: '#',
                            target: 'blank',
                            image: {
                                alt: 'Women',
                                src: require('../../../public/images/fashion-thumb1.jpg'),
                            },
                        },
                        {
                            text: 'Men',
                            as: 'a',
                            href: '#',
                            image: {
                                alt: 'Men',
                                src: require('../../../public/images/fashion-thumb2.jpg'),
                            },
                        },
                        {
                            text: 'Gear',
                            as: 'a',
                            href: '#',
                            image: {
                                alt: 'Gear',
                                src: require('../../../public/images/fashion-thumb3.jpg'),
                            },
                        },
                        {
                            text: 'Training',
                            as: 'a',
                            href: '#',
                            image: {
                                alt: 'Training',
                                src: require('../../../public/images/fashion-thumb4.jpg'),
                            },
                        },
                        {
                            text: 'Sale',
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
                        {
                            text: 'Twice around, twice as nice',
                            large: true,
                        },
                        {
                            text: 'Find conscientious, comfy clothing in our eco-friendly collection',
                        },
                    ],
                    position: 'bottom',
                    buttons: [
                        {
                            as: 'a',
                            text: 'Shop Performance',
                            fill: true,
                            href: '#',
                        },
                    ],
                },
            },
            {
                name: 'ProductCarousel',
                props: {
                    title: {
                        as: 'h3',
                        text: 'New Arrivals',
                    },
                    items: new Array(10).fill({
                        as: 'a',
                        href: '#',
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
            {
                name: 'ProductCarousel',
                props: {
                    title: {
                        as: 'h3',
                        text: 'Summer Sale',
                    },
                    items: new Array(10).fill({
                        as: 'a',
                        href: '#',
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

storiesOf('📑 Templates/Page', module).add(
    'Default',
    () => (
        <App {...AppMockData}>
            <Page {...PageMockData} />
        </App>
    ),
    {
        theme: {
            layout: 'fullPage',
        },
    }
)
