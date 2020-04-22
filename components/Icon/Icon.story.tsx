import React from 'react'
import Icon from '.'
import { storiesOf } from '@storybook/react'
import { number, text, color } from '@storybook/addon-knobs'

import IconHomeSvg from 'remixicon/icons/Buildings/store-line.svg'
import IconHeartSvg from 'remixicon/icons/System/heart-line.svg'
import IconCartSvg from 'remixicon/icons/Finance/shopping-bag-line.svg'

storiesOf('📦 Components/Icon', module).add('Default', () => (
    <div
        style={{
            display: 'grid',
            gridGap: '10rem',
            color: color('color', '#000000'),
            fontSize: number('size', 4.5) + 'rem',
        }}
    >
        <Icon count={number('count', 0)} text={text('text', '')}>
            <IconHomeSvg />
        </Icon>

        <Icon count={number('count', 0)} text={text('text', '')}>
            <IconHeartSvg />
        </Icon>

        <Icon count={number('count', 0)} text={text('text', '')}>
            <IconCartSvg />
        </Icon>
    </div>
))
