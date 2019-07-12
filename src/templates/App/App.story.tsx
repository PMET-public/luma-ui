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
    footer: {
        copyright: '© 2019 Magento, Inc. All Rights Reserved.',
        menu: [
            { label: 'Blog', link: { href: '#' } },
            { label: 'About', link: { href: '#' } },
            { label: 'Orders & Returns', link: { href: '#' } },
            { label: 'Customer Service', link: { href: '#' } },
            { label: 'Contact', link: { href: '#' } },
            { label: 'Privacy Policy', link: { href: '#' } },
            { label: 'Terms of Use', link: { href: '#' } },
        ],
        social: {
            facebook: { title: 'Facebook', href: 'https://facebook.com', target: 'blank' },
            twitter: { title: 'Twitter', href: 'https://twitter.com', target: 'blank' },
            pinterest: { title: 'Pinterest', href: 'https://pinterest.com', target: 'blank' },
            instragram: { title: 'Instagram', href: 'https://instagram.com', target: 'blank' },
        },
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
