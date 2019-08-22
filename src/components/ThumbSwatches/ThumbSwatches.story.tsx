import React from 'react'
import ThumbSwatches from './'
import { storiesOf } from '@storybook/react'
import { Story, StoryGlobalStyles } from '../../../.storybook/lib/Story.styled'
import styled from 'styled-components'
import { object } from '@storybook/addon-knobs'

const StoryContainer = styled(Story)`
    /* Story Styles */
    padding: 2rem;
    width: 90vw;
`

storiesOf('📦 Components/ThumbSwatches', module).add('Default', () => (
    <StoryContainer>
        <StoryGlobalStyles centered />
        <ThumbSwatches
            items={object('items', [
                {
                    active: true,
                    image: {
                        alt: '',
                        src: require('../../../public/images/product-item-sample.jpg'),
                    },
                },
                {
                    disabled: true,
                    image: {
                        alt: '',
                        src: require('../../../public/images/product-item-sample.jpg'),
                    },
                },
                {
                    image: {
                        alt: '',
                        src: require('../../../public/images/product-item-sample.jpg'),
                    },
                },
            ])}
        />
    </StoryContainer>
))
