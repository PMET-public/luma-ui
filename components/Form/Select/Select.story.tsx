import React from 'react'
import Select from '.'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs'
import { Form, FieldColors } from '../Form'
import { action } from '@storybook/addon-actions'

storiesOf('📦 Components/Form/Select', module).add('Default', () => (
    <Form onSubmit={action('onSubmit')}>
        <Select
            name="test"
            loading={boolean('loading', false)}
            label="Label"
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
            defaultValue="2"
            onChange={action('onChange')}
            items={[
                { text: 'One', value: '1' },
                { text: 'Two', value: '2' },
                { text: 'Three', value: '3' },
                { text: 'Four', value: '4' },
            ]}
        />
    </Form>
))
