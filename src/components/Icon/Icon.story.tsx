import React from 'react'
import Icon from './'
import { storiesOf } from '@storybook/react'
import { number, text, color } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/dist/react'

import IconHome from '@fortawesome/fontawesome-free/svgs/solid/store.svg'
import IconHeart from '@fortawesome/fontawesome-free/svgs/solid/heart.svg'
import IconCart from '@fortawesome/fontawesome-free/svgs/solid/shopping-basket.svg'

storiesOf('📦 Components/Icon', module)
    .addDecorator(centered)
    .add('Default', () => (
        <div style={{ display: 'grid', gridGap: '10rem', color: color('color', 'inherit'), fontSize: number('size', 4.5) + 'rem' }}>
            <Icon count={number('count', 0)} text={text('text', '')}>
                <IconHome />
            </Icon>

            <Icon count={number('count', 0)} text={text('text', '')}>
                <IconHeart />
            </Icon>

            <Icon count={number('count', 0)} text={text('text', '')}>
                <IconCart />
            </Icon>
        </div>
    ))
