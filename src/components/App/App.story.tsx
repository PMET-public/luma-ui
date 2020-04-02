import React from 'react'
import App, { AppProps } from '.'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import { toast } from '../../lib'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'

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
        html: (
            <div style={{ textAlign: 'center', padding: '3rem', fontSize: '0.75em', opacity: 0.65 }}>
                Footer goes here
            </div>
        ),
    },
}

const Toast = styled.div`
    display: grid;
    grid-gap: 1rem;

    & > button {
        background-color: #fff;
        border-radius: 2.4rem;
        box-sizing: border-box;
        color: #222;
        cursor: pointer;
        display: inline-flex;
        font-weight: 800;
        padding: 1rem 2.2rem;
        place-content: center;
    }
`

storiesOf('📦 Components/App', module).add('Default', () => {
    toast.info(
        <Toast>
            🎉 A new update (x.x.x) is available.
            <button onClick={action('onClick')}>Reload</button>
        </Toast>,
        {
            autoClose: false,
        }
    )
    return <App loading={boolean('loading', false)} {...AppMockData} />
})
