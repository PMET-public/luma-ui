import React from 'react'
import ThumbSwatches from '.'
import { storiesOf } from '@storybook/react'
import { number, boolean, text } from '@storybook/addon-knobs'

storiesOf('📦 Components/Form/ThumbSwatches', module).add('Default', () => (
    <ThumbSwatches
        loading={boolean('loading', false)}
        name="color"
        type="radio"
        label={text('label', '')}
        items={Array(number('quantity', 5)).fill({
            image: {
                alt: '',
                src: require('../../../../public/images/product-item-sample.jpg'),
            },
        })}
        style={{ minWidth: '40rem' }}
        error={boolean('error', false) && { message: text('error message', '') }}
    />
))
