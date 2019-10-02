import React from 'react'
import Button from './'
import { storiesOf } from '@storybook/react'
import { boolean, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('📦 Components/Button', module).add('Default', () => (
    <Button
        secondary={boolean('secondary', false)}
        disabled={boolean('disabled', false)}
        loader={boolean('loading', false) ? { label: 'loading' } : undefined}
        onClick={action('onClick')}
        text={text('text', 'Button')}
        as="button"
    />
))
