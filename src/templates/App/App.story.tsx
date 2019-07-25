import React from 'react'
import App from './'
import { storiesOf } from '@storybook/react'
import { AppProps } from './App'

export const AppMockData: AppProps = {
    home: {
        as: 'a',
        href: '#',
        label: 'Luma',
    },
    logo: {
        as: 'a',
        href: '#',
        title: 'Luma',
    },
    menu: [
        { 
            as: 'a',
            href: '#',
            label: 'Women',
        },
        { 
            as: 'a',
            href: '#',
            label: 'Men',
        },
        { 
            as: 'a',
            href: '#',
            label: 'Gear',
        },
        { 
            as: 'a',
            href: '#',
            label: 'Training',
        },
        { 
            as: 'a',
            href: '#',
            label: 'Sale',
        },
    ],
    help: {
        as: 'a',
        href: '#',
        label: 'Help',
    },
    myAccount: {
        as: 'a',
        href: '#' ,
        label: 'Login',
    },
    search: {
        as: 'a',
        href: '#' ,
        label: 'Search',
    },
    cart: {
        as: 'a',
        count: 2,
        href: '#',
        label: 'My Bag',
    },
    footer: {
        copyright: '© 2019 Magento, Inc. All Rights Reserved.',
        menu: [
            { label: 'Blog', as: 'a', href: '#' },
            { label: 'About', as: 'a', href: '#' },
            { label: 'Orders & Returns', as: 'a', href: '#' },
            { label: 'Customer Service', as: 'a', href: '#' },
            { label: 'Contact', as: 'a', href: '#' },
            { label: 'Privacy Policy', as: 'a', href: '#' },
            { label: 'Terms of Use', as: 'a', href: '#' },
        ],
        social: {
            facebook: { title: 'Facebook', as: 'a', href: 'https://facebook.com', target: 'blank' },
            twitter: { title: 'Twitter', as: 'a', href: 'https://twitter.com', target: 'blank' },
            pinterest: { title: 'Pinterest', as: 'a', href: 'https://pinterest.com', target: 'blank' },
            instragram: { title: 'Instagram', as: 'a', href: 'https://instagram.com', target: 'blank' },
        },
    },
}

storiesOf('📑 Templates/App', module)
    .add('Default', () => (
        <App {...AppMockData}>
            <div className="story__content"></div>
        </App>
    ))
