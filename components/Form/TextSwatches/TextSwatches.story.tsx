import React from 'react'
import TextSwatches from '.'
import { storiesOf } from '@storybook/react'
import { object, boolean, text, select } from '@storybook/addon-knobs'
import { Form, FieldColors } from '../Form'
import { action } from '@storybook/addon-actions'

storiesOf('📦 Components/Form/TextSwatches', module).add('Default', () => (
    <Form onSubmit={action('onSubmit')}>
        <TextSwatches
            loading={boolean('loading', false)}
            label={text('label', '')}
            name="size"
            type="radio"
            items={object('list', [{ text: 'XS' }, { text: 'M', disabled: true }, { text: 'L', defaultChecked: true }, { text: 'XL' }, { text: 'S' }])}
            onChange={action('onChange')}
            error={text('error', '')}
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
