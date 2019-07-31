import React from 'react'
import TabBar from './'
import { storiesOf } from '@storybook/react'

import IconHome from '@fortawesome/fontawesome-free/svgs/solid/store.svg'
import IconHeart from '@fortawesome/fontawesome-free/svgs/solid/heart.svg'
import IconSearch from '@fortawesome/fontawesome-free/svgs/solid/search.svg'
import IconBag from '@fortawesome/fontawesome-free/svgs/solid/shopping-bag.svg'

storiesOf('📦 Components/TabBar', module)
    .add('Default', () => (
        <div className="story">
            <TabBar className="story__tab-bar"
                items={[
                    { 
                        icon: {
                            text: 'Shop',
                            svg: IconHome,
                        },
                        active: true,
                    },
                    { 
                        icon: {
                            text: 'Favorites',
                            svg: IconHeart,
                            count: 200,
                        },
                    },
                    { 
                        icon: {
                            text: 'Search',
                            svg: IconSearch,
                        },
                    },
                    { 
                        icon: {
                            text: 'Bag',
                            svg: IconBag,
                            count: 1,
                        },
                    },
                ]}
            />

            <style jsx global>{`
                .story__tab-bar {
                    position: fixed;
                    bottom: 0;
                }
            `}</style>
        </div>
    ))
