import React from 'react'
import BubbleCarousel from '.'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/dist/react'

storiesOf('📦 Components/BubbleCarousel', module)
    .addDecorator(centered)
    .add('Default', () => (
        <BubbleCarousel 
            label='Shop the Look'
            items={[
                {
                    src: 'https://lorempixel.com/800/600/fashion/1',
                    label: 'Minimalist',
                    link: { href: '#' },
                },
                {
                    src: 'https://lorempixel.com/800/600/fashion/8',
                    label: 'Beachy',
                    link: { href: '#' },
                },
                {
                    src: 'https://lorempixel.com/800/600/fashion/3',
                    label: 'Dress Time',
                    link: { href: '#' },
                },
                {
                    src: 'https://lorempixel.com/800/600/fashion/4',
                    label: 'Essentials',
                    link: { href: '#' },
                },
                {
                    src: 'https://lorempixel.com/800/600/fashion/5',
                    label: 'Carefree',
                    link: { href: '#' },
                },
                {
                    src: 'https://lorempixel.com/800/600/fashion/6',
                    label: 'All Day',
                    link: { href: '#' },
                },
                {
                    src: 'https://lorempixel.com/800/600/fashion/7',
                    label: 'Ageless',
                    link: { href: '#' },
                },
            ]} 
        />
    ))
