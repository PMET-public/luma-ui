import React from 'react'
import Icon from './'
import { storiesOf } from '@storybook/react'
import { number, text } from '@storybook/addon-knobs'

storiesOf('📦 Components/Icon', module)
    .add('Default', () => (
        <Icon name={text('icon', 'home')} size={number('size (px)', 100)} />
    ))
