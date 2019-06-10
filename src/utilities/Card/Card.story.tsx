import React from 'react'
import Card from './'
import { storiesOf } from '@storybook/react'

storiesOf('🏗 Utilities/Card', module)
    .add('Default', () => (
        <Card style={{ width: '30rem', height: '20rem' }} />
    ))
