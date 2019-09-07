import React from 'react'
import Button from './'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('📦 Components/Button', module).add('Default', () => (
    <Button
        secondary={boolean('secondary', false)}
        text={text('text', 'Button')}
        onClick={action('onClick')}
        as="button"
    />
))
