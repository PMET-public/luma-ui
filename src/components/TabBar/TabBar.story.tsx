import React from 'react'
import TabBar from './'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/TabBar', module)
    .add('Default', () => (
        <TabBar items={[
            { label: 'Catalog', icon: 'shirt', src: '#', isActive: true },
            { label: 'Favorites', icon: 'heart', src: '#', count: 2 },
            { label: 'Search', icon: 'search', src: '#' },
            { label: 'Basket', icon: 'basket', src: '#', count: 3 },
        ]} />           
    ))
