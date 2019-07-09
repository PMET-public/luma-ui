import React from 'react'
import App from './'
import { storiesOf } from '@storybook/react'
import { AppProps } from './App'

export const AppMockData: AppProps = {
    home: {
        link: { href: '#home' },
    },
    logo: {
        title: 'Luma',
        link: { href: '#logo' },
    },
    menu: [
        { 
            label: 'Women',
            link: { href: '#story1' },
        },
        { 
            label: 'Men',
            link: { href: '#story2' },
        },
        { 
            label: 'Gear',
            link: { href: '#story3' },
        },
        { 
            label: 'Training',
            link: { href: '#story4' },
        },
        { 
            label: 'Sale',
            link: { href: '#story4' },
        },
    ],
    help: {
        link: { href: '#help'},
    },
    myAccount: {
        label: 'Login',
        link: { href: '#account' },
    },
    search: {
        link: { href: '#search' },
    },
    cart: {
        count: 2,
        link: { href: '#cart' },
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
