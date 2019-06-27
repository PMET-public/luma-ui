import React from 'react'
import App from './'
import { storiesOf } from '@storybook/react'

storiesOf('📑 Templates/App', module)
    .add('Default', () => (
        <App 
            home={{
                link: { href: '#home' },
            }}
            logo={{
                title: 'Luma',
                link: { href: '#logo' },
            }}
            menu={[
                { 
                    label: 'Bottoms', 
                    link: { href: '#' },
                    menu: [
                        { label: 'Pants & Shorts', link: { href: '#' } },
                        { label: 'Skirts', link: { href: '#' } },
                    ],
                },
                { 
                    label: 'Tops', 
                    link: { href: '#' },
                    menu: [
                        { label: 'Blouses & Shirts', link: { href: '#' } },
                        { label: 'Sweaters', link: { href: '#' } },
                    ],
                },
                { 
                    label: 'Dresses', 
                    link: { href: '#' },
                    menu: [],
                },
                { 
                    label: 'Accessories', 
                    link: { href: '#' },
                    menu: [
                        { label: 'Belts', link: { href: '#' } },
                        { label: 'Jewelry', link: { href: '#' } },
                        { label: 'Scarves', link: { href: '#' } },
                    ],
                },
            ]}
            help={{
                link: { href: '#help'},
            }}
            myAccount={{
                label: 'Katherina',
                link: { href: '#account' },
                menu: [
                    { label: 'Favorites (3)', link: { href: '#favorites'} },
                    { label: 'Sign Out', link: { href: '#account'} },
                ],
            }}
            search={{
                link: { href: '#search' },
            }}
            favorites={{
                count: 32,
                link: { href: '#favorites' },
            }}
            cart={{
                count: 2,
                link: { href: '#cart' },
            }}
        >
            {/* ... */}
        </App>
    ))
