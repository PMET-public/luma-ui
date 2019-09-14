import React from 'react'
import Link from './'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/Link', module).add('Default', () => (
    <Link href="https://magento.com" target="_blank">
        🛍 Mageto.com
    </Link>
))
