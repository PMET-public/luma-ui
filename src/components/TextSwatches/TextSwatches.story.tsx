import React from 'react'
import TextSwatches from './'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'

storiesOf('📦 Components/TextSwatches', module).add('Default', () => (
    <TextSwatches
        items={object('list', [
            { text: 'XS' },
            { text: 'M', as: 'button', disabled: true },
            { text: 'L', active: true, as: 'button' },
            { text: 'XL' },
            { text: 'S' },
        ])}
    />
))
