import React from 'react'
import App, { AppProps } from '.'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import { toast } from '../../lib'

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
        html: <div>Footer</div>,
    },
}

storiesOf('📦 Components/App', module).add('Default', () => {
    toast.success('Success!')
    toast.error('Error!')
    toast.warn('Warning!')
    toast.info('Info!')
    return <App loading={boolean('loading', false)} {...AppMockData} />
})
