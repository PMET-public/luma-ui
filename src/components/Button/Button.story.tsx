import React from 'react'
import Button from './'
import { text, select, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

const types: any = {
    button: 'button', 
    reset: 'reset', 
    submit: 'submit'
}

storiesOf('Components/Button', module)
    .add('React', () => (
        <Button 
            disabled={ boolean('disabled', false, 'props') }
            type={ select('type', types, 'button', 'props') }
        >
            { text('children', 'Label', 'props') }
        </Button>
    ))
