import React from 'react'
import Pills from '.'
import { storiesOf } from '@storybook/react'
import { object, boolean } from '@storybook/addon-knobs'

storiesOf('📦 Components/Pills', module).add('Default', () => (
    <Pills
        loading={boolean('loading', false)}
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
