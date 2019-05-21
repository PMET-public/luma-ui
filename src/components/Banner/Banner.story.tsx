import React from 'react'
import Banner from './'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered';

storiesOf('Components/Banner', module)
    .addDecorator(centered)
    .add('React', () => (
        <Banner />
    ))
