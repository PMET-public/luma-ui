import React from 'react'
import Breadcrumbs from './'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

storiesOf('📦 Components/Breadcrumbs', module).add('Default', () => (
    <Breadcrumbs
        dividor={text('dividor', '')}
        prefix={text('prefix', '#')}
        items={[
            { as: 'a', href: '#', text: 'One' },
            { as: 'a', href: '#', text: 'Two' },
            { as: 'a', href: '#', text: 'Three' },
        ]}
    />
))
