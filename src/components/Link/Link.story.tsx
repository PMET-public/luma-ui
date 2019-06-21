import React from 'react'
import Link from './'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/dist/react'

storiesOf('📦 Components/Link', module)
    .addDecorator(centered)
    .add('Default', () => (
        <Link href="http://magento.com" target="blank">
            🔗 Magento.com
        </Link>
    ))
