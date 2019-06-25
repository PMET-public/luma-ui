import React from 'react'
import Link from './'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/dist/react'

storiesOf('📦 Components/Link', module)
    .addDecorator(centered)
    .add('Default', () => (
        <Link href="https://magento.com" target="blank">
            👋 Howdy! I'm a Link
        </Link>
    ))
