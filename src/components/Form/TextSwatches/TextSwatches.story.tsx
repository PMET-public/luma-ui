import React from 'react'
import TextSwatches from '../TextSwatches'
import { storiesOf } from '@storybook/react'
import { object, boolean, text } from '@storybook/addon-knobs'

storiesOf('📦 Components/Form/TextSwatches', module).add('Default', () => (
    <TextSwatches
        label={text('label', '')}
        name="size"
        type="radio"
        items={object('list', [
            { text: 'XS' },
            { text: 'M', disabled: true },
            { text: 'L', defaultChecked: true },
            { text: 'XL' },
            { text: 'S' },
        ])}
        error={boolean('error', false) ? { message: text('error message', 'Error') } : undefined}
    />
))
