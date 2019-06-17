import React from 'react'
import TabBar from './'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/TabBar', module)
    .add('Default', () => (
        <TabBar items={[
            { label: 'Shop', src: require('../Icon/svgs/thin/hanger.svg'), url: '#', isActive: true },
            { label: 'Favorites', src: require('../Icon/svgs/thin/heart.svg'), url: '#', count: 2 },
            { label: 'Search', src: require('../Icon/svgs/thin/magnifier.svg'), url: '#' },
            { label: 'Bag', src: require('../Icon/svgs/thin/bag.svg'), url: '#', count: 3 },
        ]} />           
    ))
