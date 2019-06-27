import React from 'react'
import TabBar, { TabBarItem } from './'
import Icon from '../Icon'
import { storiesOf } from '@storybook/react'

import IconHanger from '../Icon/svgs/thin/hanger.svg'
import IconHeart from '../Icon/svgs/thin/heart.svg'
import IconMagnifier from '../Icon/svgs/thin/magnifier.svg'
import IconBag from '../Icon/svgs/thin/bag.svg'

storiesOf('📦 Components/TabBar', module)
    .add('Default', () => (
        <TabBar>
            <TabBarItem isActive={true}>
                <Icon label="Shop">
                    <IconHanger />
                </Icon>
            </TabBarItem>

            <TabBarItem>
                <Icon label="Favorites" count={3100}>
                    <IconHeart />
                </Icon>
            </TabBarItem>

            <TabBarItem>
                <Icon label="Search">
                    <IconMagnifier />
                </Icon>
            </TabBarItem>

            <TabBarItem>
                <Icon label="Bag" count={1}>
                    <IconBag />
                </Icon>
            </TabBarItem>
        </TabBar>
    ))
