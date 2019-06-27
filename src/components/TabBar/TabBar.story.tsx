import React from 'react'
import TabBar from './'
import Icon from '../Icon'
import { storiesOf } from '@storybook/react'

import IconHanger from '../Icon/svgs/thin/hanger.svg'
import IconHeart from '../Icon/svgs/thin/heart.svg'
import IconMagnifier from '../Icon/svgs/thin/magnifier.svg'
import IconBag from '../Icon/svgs/thin/bag.svg'

storiesOf('📦 Components/TabBar', module)
    .add('Default', () => (
        <TabBar>
            <TabBar.Item isActive={true}>
                <Icon label="Shop">
                    <IconHanger />
                </Icon>
            </TabBar.Item>

            <TabBar.Item>
                <Icon label="Favorites" count={3100}>
                    <IconHeart />
                </Icon>
            </TabBar.Item>

            <TabBar.Item>
                <Icon label="Search">
                    <IconMagnifier />
                </Icon>
            </TabBar.Item>

            <TabBar.Item>
                <Icon label="Bag" count={1}>
                    <IconBag />
                </Icon>
            </TabBar.Item>
        </TabBar>
    ))
