import React from 'react'
import ThumbSwatches from './'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'

storiesOf('📦 Components/ThumbSwatches', module).add('Default', () => (
    <ThumbSwatches
        items={object('items', [
            {
                active: true,
                image: {
                    alt: '',
                    src: require('../../../public/images/product-item-sample.jpg'),
                },
            },
            {
                disabled: true,
                image: {
                    alt: '',
                    src: require('../../../public/images/product-item-sample.jpg'),
                },
            },
            {
                image: {
                    alt: '',
                    src: require('../../../public/images/product-item-sample.jpg'),
                },
            },
        ])}
        style={{ minWidth: '40rem' }}
    />
))
