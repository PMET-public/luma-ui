import React from 'react'
import Button from './'
import { storiesOf } from '@storybook/react'
import { text, select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('📦 Components/Button', module)
    .add('Default', () => (
        <Button
            as="button"
            color={select('color', { primary: 'primary', secondary: 'secondary' }, undefined)}
            fill={boolean('fill', false)}
            text={text('text', 'Button')}
            onClick={action('onClick')}
        />
    ))
