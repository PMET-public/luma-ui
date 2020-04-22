import React from 'react'
import TabBar from '.'
import { storiesOf } from '@storybook/react'

import IconHomeActiveSvg from 'remixicon/icons/Buildings/store-2-fill.svg'
import IconHeartSvg from 'remixicon/icons/System/heart-line.svg'
import IconSearchSvg from 'remixicon/icons/System/search-line.svg'
import IconBagSvg from 'remixicon/icons/Finance/shopping-bag-line.svg'

storiesOf('📦 Components/TabBar', module).add('Default', () => (
    <TabBar
        items={[
            {
                icon: {
                    text: 'Shop',
                    svg: IconHomeActiveSvg,
                },
                active: true,
            },
            {
                icon: {
                    text: 'Favorites',
                    svg: IconHeartSvg,
                    count: 200,
                },
            },
            {
                icon: {
                    text: 'Search',
                    svg: IconSearchSvg,
                },
            },
            {
                icon: {
                    text: 'Bag',
                    svg: IconBagSvg,
                    count: 1,
                },
            },
        ]}
        style={{ position: 'fixed', bottom: 0, left: 0 }}
    />
))
