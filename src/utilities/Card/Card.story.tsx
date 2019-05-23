import React from 'react'
import Card from './'
import centered from '@storybook/addon-centered/react'
import { storiesOf } from '@storybook/react'

storiesOf('🏗 Utilities/Card', module)
    .addDecorator(centered)
    .add('Default', () => (
        <Card style={{ width: '30rem', height: '20rem' }} />
    ))
