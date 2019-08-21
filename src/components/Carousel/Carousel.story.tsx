import React from 'react'
import Carousel, { Item } from './'
import { storiesOf } from '@storybook/react'
import { StoryGlobalStyles, Story } from '../../../.storybook/lib/Story.styled'
import styled from 'styled-components'
import { number } from '@storybook/addon-knobs'

const StoryContainer = styled(Story)`
    /*  */
    min-width: 90vw;

    ${Item} {
        & > span {
            align-items: center;
            color: #fff;
            display: flex;
            height: 50vh;
            justify-content: center;
            font-size: 4rem;
        }
    }
`

storiesOf('📦 Components/Carousel', module).add('Default', () => (
    <StoryContainer>
        <StoryGlobalStyles centered />

        <Carousel padding={number('padding', 4)} gap={number('gap', 2)} show={number('show', 1)}>
            <Carousel.Item>
                <span style={{ backgroundColor: '#999' }}>1</span>
            </Carousel.Item>
            <Carousel.Item>
                <span style={{ backgroundColor: '#888' }}>2</span>
            </Carousel.Item>
            <Carousel.Item>
                <span style={{ backgroundColor: '#777' }}>3</span>
            </Carousel.Item>
        </Carousel>
    </StoryContainer>
))
