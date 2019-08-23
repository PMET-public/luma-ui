import React from 'react'
import Banner from './'
import { storiesOf } from '@storybook/react'
import { object, select } from '@storybook/addon-knobs'

storiesOf('📦 Components/Banner', module).add('Default', () => (
    <Banner
        position={select('position', { top: 'top', bottom: 'bottom' }, 'top', 'position')}
        image={object(
            'image',
            {
                alt: '',
                src: require('../../../public/images/banner-1.jpg'),
                width: 'auto',
                height: 700,
            },
            'image'
        )}
        titles={object(
            'titles',
            [
                { text: 'Find conscientious, comfy clothing in our eco-friendly collection' },
                { text: 'Twice around, twice as nice', large: true },
            ],
            'titles'
        )}
        buttons={object(
            'buttons',
            [
                { text: 'Button 1', fill: true, as: 'a', href: '#' },
                { text: 'Button 2', as: 'a', href: '#' },
                { text: 'Button 3', as: 'a', href: '#' },
            ],
            'buttons'
        )}
    />
))
