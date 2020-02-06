import React from 'react'
import TextSwatches from '../TextSwatches'
import { storiesOf } from '@storybook/react'
import { object, boolean, text } from '@storybook/addon-knobs'
import { Form } from '../Form'

storiesOf('📦 Components/Form/TextSwatches', module).add('Default', () => (
    <Form>
        <TextSwatches
            loading={boolean('loading', false)}
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
            error={text('error', '')}
        />
    </Form>
))
