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
                },
                { 
                    label: 'Tops', 
                    link: { href: '#' },
                },
                { 
                    label: 'Dresses', 
                    link: { href: '#' },
                },
                { 
                    label: 'Accessories', 
                    link: { href: '#' },
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
            <div className="story__content"></div>

            <style jsx>{`
                .story__content {
                    height: 300vh;
                    background: #ddd;
                }    
            `}</style>
        </App>
    ))
