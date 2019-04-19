import React from 'react'
import Button from 'src/components/Button'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

storiesOf('Components/Button', module)
    .add('React', () => (
        <Button>
            { text('Text', 'button') }
        </Button>
    ))