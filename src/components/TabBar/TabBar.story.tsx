import React from 'react'
import TabBar from './'
import Icon from '../Icon'
import { storiesOf } from '@storybook/react'

import IconHome from '@fortawesome/fontawesome-free/svgs/solid/store.svg'
import IconHeart from '@fortawesome/fontawesome-free/svgs/solid/heart.svg'
import IconSearch from '@fortawesome/fontawesome-free/svgs/solid/search.svg'
import IconBag from '@fortawesome/fontawesome-free/svgs/solid/shopping-bag.svg'

storiesOf('📦 Components/TabBar', module)
    .add('Default', () => (
        <div className="story">
            <TabBar className="story__tab-bar">
                <TabBar.Item isActive={true}>
                    <Icon label="Shop">
                        <IconHome />
                    </Icon>
                </TabBar.Item>

                <TabBar.Item>
                    <Icon label="Favorites" count={3100}>
                        <IconHeart />
                    </Icon>
                </TabBar.Item>

                <TabBar.Item>
                    <Icon label="Search">
                        <IconSearch />
                    </Icon>
                </TabBar.Item>

                <TabBar.Item>
                    <Icon label="Bag" count={1}>
                        <IconBag />
                    </Icon>
                </TabBar.Item>
            </TabBar>

            <style jsx global>{`
                .story__tab-bar {
                    position: fixed;
                    bottom: 0;
                }
            `}</style>
        </div>
    ))
