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
    carousels: [
        {
            label: 'New Arrivals',
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
