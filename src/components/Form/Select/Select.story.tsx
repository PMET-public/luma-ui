import React from 'react'
import Select from '../Select'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { Form } from '../Form'
import { action } from '@storybook/addon-actions'

storiesOf('📦 Components/Form/Select', module).add('Default', () => (
    <Form>
        <Select
            name="test"
            loading={boolean('loading', false)}
            label="Label"
            error={text('error', '')}
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
