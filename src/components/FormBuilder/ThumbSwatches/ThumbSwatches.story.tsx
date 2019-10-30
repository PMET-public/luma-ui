import React from 'react'
import ThumbSwatches from './'
import { storiesOf } from '@storybook/react'
import { object, boolean, text } from '@storybook/addon-knobs'

storiesOf('📦 Components/FormBuilder/ThumbSwatches', module).add('Default', () => (
    <ThumbSwatches
        name="color"
        type="radio"
        label={text('label', '')}
        items={object('items', [
            {
                image: {
                    alt: '',
                    src: require('../../../../public/images/product-item-sample.jpg'),
                },
            },
            {
                disabled: true,
                image: {
                    alt: '',
                    src: require('../../../../public/images/product-item-sample.jpg'),
                },
            },
            {
                defaultChecked: true,
                image: {
                    alt: '',
                    src: require('../../../../public/images/product-item-sample.jpg'),
                },
            },
        ])}
        style={{ minWidth: '40rem' }}
        error={boolean('error', false) && { message: text('error message', '') }}
    />
))
