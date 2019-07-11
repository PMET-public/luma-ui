import React from 'react'
import App from './'
import { storiesOf } from '@storybook/react'
import { AppProps } from './App'

export const AppMockData: AppProps = {
    home: {
        link: { href: '#' },
    },
    logo: {
        title: 'Luma',
        link: { href: '#' },
    },
    menu: [
        { 
            label: 'Women',
            link: { href: '#' },
        },
        { 
            label: 'Men',
            link: { href: '#' },
        },
        { 
            label: 'Gear',
            link: { href: '#' },
        },
        { 
            label: 'Training',
            link: { href: '#' },
        },
        { 
            label: 'Sale',
            link: { href: '#' },
        },
    ],
    help: {
        link: { href: '#'},
    },
    myAccount: {
        label: 'Login',
        link: { href: '#' },
    },
    search: {
        link: { href: '#' },
    },
    cart: {
        count: 2,
        link: { href: '#' },
    },
}

storiesOf('📑 Templates/App', module)
    .add('Default', () => (
        <App {...AppMockData}>
            <div className="story__content"></div>

            <style jsx global>{`
                .story__content {
                    height: 300vh;
                    background: #ddd;
                }    
            `}</style>
        </App>
    ))
