import React from 'react'
import Pills from '.'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'

storiesOf('📦 Components/Pills', module).add('Default', () => (
    <Pills
        items={object('items', [
            {
                text: 'Tops',
                count: 2,
            },
            {
                text: 'Bottoms',
                count: 13,
            },
            {
                text: 'Sweaters',
                count: 100,
            },
        ])}
    />
))
