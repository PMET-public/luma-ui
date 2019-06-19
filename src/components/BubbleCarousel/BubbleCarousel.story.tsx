import React from 'react'
import Stories from '.'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/dist/react'

const Link = ({ href, children }: any) => <a href={href}>{children}</a>

storiesOf('📦 Components/BubbleCarousel', module)
    .addDecorator(centered)
    .add('Default', () => (
        <Stories 
            label='Shop the Look'
            routerLink={Link}
            items={[
                {
                    src: 'https://lorempixel.com/800/600/fashion/1',
                    label: 'Minimalist',
                    route: { href: '#' },
                },
                {
                    src: 'https://lorempixel.com/800/600/fashion/8',
                    label: 'Beachy',
                    route: { href: '#' },
                },
                {
                    src: 'https://lorempixel.com/800/600/fashion/3',
                    label: 'Dress Time',
                    route: { href: '#' },
                },
                {
                    src: 'https://lorempixel.com/800/600/fashion/4',
                    label: 'Essentials',
                    route: { href: '#' },
                },
                {
                    src: 'https://lorempixel.com/800/600/fashion/5',
                    label: 'Carefree',
                    route: { href: '#' },
                },
                {
                    src: 'https://lorempixel.com/800/600/fashion/6',
                    label: 'All Day',
                    route: { href: '#' },
                },
                {
                    src: 'https://lorempixel.com/800/600/fashion/7',
                    label: 'Ageless',
                    route: { href: '#' },
                },
            ]} 
        />
    ))
