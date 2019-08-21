import React from 'react'
import BubbleCarousel from '.'
import { storiesOf } from '@storybook/react'
import { StoryGlobalStyles, Story } from '../../../.storybook/lib/Story.styled'
import styled from 'styled-components'

const StoryContainer = styled(Story)`
    padding: 1rem;
`

storiesOf('📦 Components/BubbleCarousel', module).add('Default', () => (
    <StoryContainer>
        <StoryGlobalStyles centered />

        <BubbleCarousel
            label="Shop the Look"
            items={[
                {
                    as: 'a',
                    href: '#',
                    image: {
                        src: require('../../../public/images/fashion-thumb1.jpg'),
                    },
                    text: 'Minimalist',
                },
                {
                    as: 'a',
                    href: '#',
                    image: {
                        src: require('../../../public/images/fashion-thumb1.jpg'),
                    },
                    text: 'Minimalist',
                },
                {
                    as: 'a',
                    href: '#',
                    image: {
                        src: require('../../../public/images/fashion-thumb2.jpg'),
                    },
                    text: 'Dressy',
                },
                {
                    as: 'a',
                    href: '#',
                    image: {
                        src: require('../../../public/images/fashion-thumb3.jpg'),
                    },
                    text: 'Beachy',
                },
                {
                    as: 'a',
                    href: '#',
                    image: {
                        src: require('../../../public/images/fashion-thumb4.jpg'),
                    },
                    text: 'Biz Cas’',
                },
                {
                    as: 'a',
                    href: '#',
                    image: {
                        src: require('../../../public/images/fashion-thumb5.jpg'),
                    },
                    text: 'All Time',
                },
            ]}
        />
    </StoryContainer>
))
