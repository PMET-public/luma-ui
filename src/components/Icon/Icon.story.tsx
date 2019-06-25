import React from 'react'
import Icon from './'
import { storiesOf } from '@storybook/react'
import { number, text, color } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/dist/react'

import IconStore from '../Icon/svgs/thin/store.svg'
import IconHeart from '../Icon/svgs/thin/heart.svg'
import IconCart from '../Icon/svgs/thin/cart.svg'

storiesOf('📦 Components/Icon', module)
    .addDecorator(centered)
    .add('Default', () => (
        <div style={{ display: 'grid', gridGap: '10rem', color: color('color', 'inherit'), fontSize: number('size', 4.5) + 'rem' }}>
            <Icon count={number('count', 0)} label={text('label', '')}>
                <IconStore />
            </Icon>

            <Icon count={number('count', 0)} label={text('label', '')}>
                <IconHeart />
            </Icon>

            <Icon count={number('count', 0)} label={text('label', '')}>
                <IconCart />
            </Icon>
        </div>
    ))
