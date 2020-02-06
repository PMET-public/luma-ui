import React from 'react'
import Select from '../Select'
import { storiesOf } from '@storybook/react'
import { text, boolean, object } from '@storybook/addon-knobs'
import { Form } from '../Form'

storiesOf('📦 Components/Form/Select', module).add('Default', () => (
    <Form>
        <Select
            name="test"
            loading={boolean('loading', false)}
            label="Label"
            error={text('error message', '')}
            defaultValue="2"
            items={[
                { text: 'One', value: '1' },
                { text: 'Two', value: '2' },
                { text: 'Three', value: '3' },
                { text: 'Four', value: '4' },
            ]}
            rules={object('rules', { required: true })}
        />
    </Form>
))
