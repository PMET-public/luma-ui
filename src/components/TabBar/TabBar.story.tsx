import React from 'react'
import TabBar from './'
import Icon from '../Icon'
import Svg from 'react-svg'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/TabBar', module)
    .add('Default', () => (
        <TabBar 
            items={[
                {
                    isActive: true,
                    icon: <Icon 
                        label="Shop" 
                        svg={<Svg src={require('../Icon/svgs/thin/hanger.svg')} />} 
                    />,
                    link: { href: '#shop' },
                },
                {
                    icon: <Icon 
                        label="Favorites" 
                        svg={<Svg src={require('../Icon/svgs/thin/heart.svg')} />} 
                        count={3} 
                    />,
                    link: { href: '#favorites' },
                },
                {
                    icon: <Icon 
                        label="Search" 
                        svg={<Svg src={require('../Icon/svgs/thin/magnifier.svg')} />} 
                    />,
                    link: { href: '#search' },
                },
                {
                    icon: <Icon 
                        label="Bag" 
                        svg={<Svg src={require('../Icon/svgs/thin/bag.svg')} />} 
                        count={1} 
                    />,
                    link: { href: '#bag' },
                },
            ]} 
        />
    ))
