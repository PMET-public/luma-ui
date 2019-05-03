import React from 'react'
import Button from './'
import centered from '@storybook/addon-centered/react'
import { text, select, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

const types: any = {
    button: 'button',
    reset: 'reset',
    submit: 'submit'
}

storiesOf('Components/Button', module)
    .addDecorator(centered)
    .add('React', () => (
        <Button
            disabled={boolean('disabled', false, 'props')}
            type={select('type', types, 'button', 'props')}
            onClick={action('onClick')}
        >
            {text('children', 'Label', 'props')}
        </Button>
    ))

