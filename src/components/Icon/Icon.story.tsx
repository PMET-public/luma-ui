import React from 'react'
import Svg from 'react-svg'
import Icon from './'
import { storiesOf } from '@storybook/react'
import { number, text, color } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/dist/react'

storiesOf('📦 Components/Icon', module)
    .addDecorator(centered)
    .add('Default', () => (
        <div style={{ color: color('color', 'inherit'), fontSize: number('size', 4.5) + 'rem' }}>
            <Icon className="story-icon"
                count={number('count', 0)}
                label={text('label', '')}
                svg={<Svg src={require('../Icon/svgs/thin/store.svg')} wrapper="span" />}
            />
        </div>
    ))
