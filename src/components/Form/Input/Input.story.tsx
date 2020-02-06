import React from 'react'
import Input from '.'
import { storiesOf } from '@storybook/react'
import { text, boolean, object } from '@storybook/addon-knobs'
import { Form } from '../Form'

storiesOf('📦 Components/Form/Input', module).add('Default', () => (
    <Form>
        <Input
            name="test"
            loading={boolean('loading', false)}
            label="Label"
            placeholder={text('placeholder', '')}
            error={text('error message', '')}
            rules={object('rules', { required: true })}
        />
    </Form>
))
