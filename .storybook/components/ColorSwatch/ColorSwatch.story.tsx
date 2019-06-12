import React from 'react'
import { storiesOf } from '@storybook/react'
import ColorSwatch from '.'
import { select } from '@storybook/addon-knobs'

const colors = {
    accent: 'accent',
    background: 'background',
    surface: 'surface',
    primary: 'primary',
    secondary: 'secondary',
    error: 'error',
}

storiesOf('🏗 Utilities/ColorSwatch', module)
    .add('Default', () => (
        <ColorSwatch color={select('color', colors, 'primary', 'props')} />
    ))
