import React from 'react'
import TabBar, { TabBarItem } from './'
import Icon from '../Icon'
import Svg from 'react-svg'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/TabBar', module)
    .add('Default', () => (
        <TabBar>
            <TabBarItem isActive={true}>
                <Icon 
                    label="Shop" 
                    svg={<Svg src={require('../Icon/svgs/thin/hanger.svg')} />} 
                />
            </TabBarItem>

            <TabBarItem>
                <Icon 
                    label="Favorites" 
                    svg={<Svg src={require('../Icon/svgs/thin/heart.svg')} />} 
                    count={3} 
                />
            </TabBarItem>

            <TabBarItem>
                <Icon 
                    label="Search" 
                    svg={<Svg src={require('../Icon/svgs/thin/magnifier.svg')} />} 
                />
            </TabBarItem>

            <TabBarItem>
                <Icon 
                    label="Bag" 
                    svg={<Svg src={require('../Icon/svgs/thin/bag.svg')} />} 
                    count={1} 
                />
            </TabBarItem>
        </TabBar>
    ))
