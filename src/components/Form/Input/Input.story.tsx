import React from 'react'
import Input from '.'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'

storiesOf('📦 Components/Form/Input', module).add('Default', () => (
    <Input
        loading={boolean('loading', false)}
        label="Label"
        placeholder={text('placeholder', '')}
        error={boolean('error', false) ? { message: text('error message', '') } : undefined}
    />
))
