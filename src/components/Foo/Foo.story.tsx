import React from 'react'
import Foo from './'
import { storiesOf } from '@storybook/react'

storiesOf('Components/Foo', module)
    .add('React', () => (
        <Foo />
    ))