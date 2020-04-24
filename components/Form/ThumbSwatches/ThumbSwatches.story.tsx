import React from 'react'
import ThumbSwatches from '.'
import { storiesOf } from '@storybook/react'
import { number, boolean, text, select } from '@storybook/addon-knobs'
import { Form, FieldColors } from '../Form'
import { action } from '@storybook/addon-actions'

storiesOf('📦 Components/Form/ThumbSwatches', module).add('Default', () => (
    <Form onSubmit={action('onSubmit')}>
        <ThumbSwatches
            loading={boolean('loading', false)}
            name="color"
            type="radio"
            label={text('label', 'Color')}
            items={Array(number('quantity', 5)).fill({
                image: {
                    alt: 'Hola',
                    src: require('../../../public/images/product-item-sample.jpg'),
                },
            })}
            style={{ maxWidth: '40rem' }}
            error={text('error', '')}
            onChange={action('onChange')}
            color={select(
                'color',
                {
                    default: FieldColors.default,
                    error: FieldColors.error,
                    warning: FieldColors.warning,
                    notice: FieldColors.notice,
                },
                undefined
            )}
        />
    </Form>
))
