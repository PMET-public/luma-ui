import React from 'react'
import Price from '.'
import { storiesOf } from '@storybook/react'
import { text, number, select, boolean } from '@storybook/addon-knobs'

storiesOf('📦 Components/Price', module).add('Default', () => (
    <Price
        loading={boolean('loading', false)}
        currency={select('currency', { USD: 'USD', EUR: 'EUR' }, 'USD')}
        regular={number('regular', 9.99)}
        special={number('special', 4.99)}
        label={text('label', 'Starting at')}
    />
))
