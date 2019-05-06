import React from 'react'
import Banner from './'
import { storiesOf } from '@storybook/react'

storiesOf('Components/Banner', module)
    .add('React', () => (
        <Banner />
    ))