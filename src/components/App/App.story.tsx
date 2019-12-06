import React from 'react'
import App, { AppProps } from '.'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'

export const AppMockData: AppProps = {
    logo: {
        as: 'a',
        href: '#',
        title: 'Luma',
    },
    home: {
        as: 'a',
        href: '#',
        text: 'Store',
        active: true,
    },
    menu: [
        {
            as: 'a',
            href: '#',
            text: 'Women',
        },
        {
            as: 'a',
            href: '#',
            text: 'Men',
        },
        {
            as: 'a',
            href: '#',
            text: 'Gear',
        },
        {
            as: 'a',
            href: '#',
            text: 'Training',
        },
        {
            as: 'a',
            href: '#',
            text: 'Sale',
        },
    ],
    // myAccount: {
    //     as: 'a',
    //     href: '#',
    //     text: 'My Account',
    // },
    // favorites: {
    //     as: 'a',
    //     href: '#',
    //     text: 'Liked',
    // },
    search: {
        as: 'a',
        href: '#',
        text: 'Search',
    },
    cart: {
        as: 'a',
        count: 2,
        href: '#',
        text: 'My Bag',
    },
    footer: {
        copyright: '© 2019 Magento, Inc. All Rights Reserved.',
        menu: [
            { text: 'Blog', as: 'a', href: '#' },
            { text: 'About', as: 'a', href: '#' },
            { text: 'Orders & Returns', as: 'a', href: '#' },
            { text: 'Customer Service', as: 'a', href: '#' },
            { text: 'Contact', as: 'a', href: '#' },
            { text: 'Privacy Policy', as: 'a', href: '#' },
            { text: 'Terms of Use', as: 'a', href: '#' },
        ],
        social: {
            facebook: { title: 'Facebook', as: 'a', href: 'https://facebook.com', target: 'blank' },
            twitter: { title: 'Twitter', as: 'a', href: 'https://twitter.com', target: 'blank' },
            pinterest: { title: 'Pinterest', as: 'a', href: 'https://pinterest.com', target: 'blank' },
            instragram: { title: 'Instagram', as: 'a', href: 'https://instagram.com', target: 'blank' },
        },
    },
}

storiesOf('📦 Components/App', module).add('Default', () => (
    <App loading={boolean('loading', false)} {...AppMockData} />
))
