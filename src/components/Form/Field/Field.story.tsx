import React from 'react'
import Field from '.'
import { storiesOf } from '@storybook/react'
import { boolean, text } from '@storybook/addon-knobs'

storiesOf('📦 Components/Form/Field', module).add('Default', () => (
    <Field
        label={{
            text: text('label', 'Label'),
        }}
        error={boolean('error', false)}
    >
        {'{FormField}'}
    </Field>
))
