import React from 'react'
import TabBar from './'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/TabBar', module)
    .add('Default', () => (
        <TabBar items={[
            { label: 'Shop', iconSrc: require('../Icon/svgs/thin/hanger.svg'), src: '#', isActive: true },
            { label: 'Favorites', iconSrc: require('../Icon/svgs/thin/heart.svg'), src: '#', count: 2 },
            { label: 'Search', iconSrc: require('../Icon/svgs/thin/magnifier.svg'), src: '#' },
            { label: 'Bag', iconSrc: require('../Icon/svgs/thin/bag.svg'), src: '#', count: 3 },
        ]} />           
    ))
