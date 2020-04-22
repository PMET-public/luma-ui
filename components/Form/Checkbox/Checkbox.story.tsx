import React from 'react'
import Checkbox from '.'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import { Form, FieldColors } from '../Form'
import { action } from '@storybook/addon-actions'

storiesOf('📦 Components/Form/Checkbox', module).add('Default', () => (
    <Form onSubmit={action('onSubmit')}>
        <Checkbox
            label="Label"
            name="test"
            placeholder={text('placeholder', '')}
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
            type={select('type', { checkbox: 'checkbox', radio: 'radio' }, 'checkbox')}
            items={[
                {
                    text: 'Option 1',
                    value: 'option1',
                },
                {
                    text: 'Option 2',
                    value: 'option2',
                    defaultChecked: true,
                },
                {
                    text: 'Option 3',
                    value: 'option3',
                },
            ]}
        />
    </Form>
))
