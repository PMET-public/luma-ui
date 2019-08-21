import React from 'react'
import TabBar from './'
import { storiesOf } from '@storybook/react'
import { Story, StoryGlobalStyles } from '../../../.storybook/lib/Story.styled'
import styled from 'styled-components'

import IconHome from '@fortawesome/fontawesome-free/svgs/solid/store.svg'
import IconHeart from '@fortawesome/fontawesome-free/svgs/solid/heart.svg'
import IconSearch from '@fortawesome/fontawesome-free/svgs/solid/search.svg'
import IconBag from '@fortawesome/fontawesome-free/svgs/solid/shopping-bag.svg'

const StoryContainer = styled(Story)`
    /* Story Styles */
    position: fixed;
    bottom: 0;
    width: 100%;
`

storiesOf('📦 Components/TabBar', module).add('Default', () => (
    <StoryContainer>
        <StoryGlobalStyles />
        <TabBar
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
    </StoryContainer>
))
