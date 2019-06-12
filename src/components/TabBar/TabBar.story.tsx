import React from 'react'
import TabBar, { TabBarLink } from './'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/TabBar', module)
    .add('Default', () => (
        <TabBar>
            <TabBarLink icon="shirt" label="Catalog" src="#" isActive={true} />
            <TabBarLink icon="heart" label="Favorites" src="#" count={2} />
            <TabBarLink icon="search" label="Search" src="#" />
            <TabBarLink icon="basket" label="Basket" src="#" count={3} />
        </TabBar>
    ))
