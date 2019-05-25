import React from 'react'
import { storiesOf } from '@storybook/react'
import ColorSwatch from '.'
import centered from '@storybook/addon-centered/react'
import { select } from '@storybook/addon-knobs'

const colors = {
    background: 'background',
    surface: 'surface',
    primary: 'primary',
    secondary: 'secondary',
    error: 'error',
}

storiesOf('🏗 Utilities/ColorSwatch', module)
    .addDecorator(centered)
    .add('Default', () => (
        <div className="container">
            <ColorSwatch color={select('color', colors, 'primary', 'props')} />
        </div>
    ))
