import React from 'react'
import Input from '.'
import { storiesOf } from '@storybook/react'
import { text, boolean, object, select } from '@storybook/addon-knobs'
import { Form, FieldColors } from '../Form'
import { action } from '@storybook/addon-actions'

storiesOf('📦 Components/Form/Input', module).add('Default', () => (
    <Form onSubmit={action('onSubmit')}>
        <Input
            name="test"
            loading={boolean('loading', false)}
            label="Label"
            placeholder={text('placeholder', '')}
            error={text('error', '')}
            color={select(
                'color',
                {
                    default: undefined,
                    error: FieldColors.error,
                    warning: FieldColors.warning,
                    notice: FieldColors.notice,
                },
                undefined
            )}
            rules={object('rules', { required: true })}
            onChange={action('onChange')}
        />
    </Form>
))
