import React from 'react'
import FooBar from './'
import centered from '@storybook/addon-centered/react'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/FooBar', module)
    .addDecorator(centered)
    .add('Default', () => (
        <FooBar />
    ))
