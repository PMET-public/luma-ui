import React from 'react'
import Breadcrumbs from '.'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'

storiesOf('📦 Components/Breadcrumbs', module).add('Default', () => (
    <Breadcrumbs
        loading={boolean('loading', false)}
        divider={text('divider', '')}
        prefix={text('prefix', '#')}
        items={[
            { as: 'a', href: '#', text: 'One' },
            { as: 'a', href: '#', text: 'Two' },
            { as: 'a', href: '#', text: 'Three' },
        ]}
    />
))
