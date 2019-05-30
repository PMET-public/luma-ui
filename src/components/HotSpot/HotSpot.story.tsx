import React from 'react'
import HotSpot from './'
import centered from '@storybook/addon-centered/react'
import { storiesOf } from '@storybook/react'
import { text, boolean, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('📦 Components/HotSpot', module)
    .addDecorator(centered)
    .add('Default', () => (
        <HotSpot 
            coords={object('coords', {x: 0, y: 0})}
            isOpen={boolean('isOpen', false)}
            label={text('label', 'Say Hi')}
            onClick={action('onClick')}
        >
            👋 Hi, I'm HotSpot
        </HotSpot>
    ))
