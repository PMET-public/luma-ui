import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import Button from './'

storiesOf('Components/Button', module)
    .add('React', () => (
        <Button>
            { text('Text', 'button') }
        </Button>
    ))