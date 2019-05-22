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

storiesOf('Components/ColorSwatch', module)
    .addDecorator(centered)
    .add('Default', () => (
        <div>
            <div style={{ width: '40rem' }}>
                <ColorSwatch color={select('color', colors, 'primary', 'props')} />
            </div>
        </div>
    ))

