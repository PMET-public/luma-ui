import React from 'react'
import Select from '.'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'

storiesOf('📦 Components/Form/Select', module).add('Default', () => (
    <Select
        label="Label"
        error={boolean('error', false) && { message: text('error message', '') }}
        items={[
            { text: 'One', value: '1' },
            { text: 'Two', value: '2' },
            { text: 'Three', value: '3' },
            { text: 'Four', value: '4' },
        ]}
    />
))
