import React from 'react'
import Icon from './'
import { storiesOf } from '@storybook/react'
import { number, text } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/dist/react'

storiesOf('📦 Components/Icon', module)
    .addDecorator(centered)
    .add('Default', () => (
        <Icon 
            name={text('icon', 'home')} 
            size={number('size (px)', 45)} 
            label={text('label', '')}
            count={number('count', 0)} 
        />
    ))
