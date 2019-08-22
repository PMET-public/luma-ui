import React from 'react'
import Pills from '.'
import { storiesOf } from '@storybook/react'
import { Story, StoryGlobalStyles } from '../../../.storybook/lib/Story.styled'
import styled from 'styled-components'
import { object } from '@storybook/addon-knobs'

const StoryContainer = styled(Story)`
    /* Story Styles */
    padding: 2rem;
`

storiesOf('📦 Components/Pills', module).add('Default', () => (
    <StoryContainer>
        <StoryGlobalStyles centered />
        <Pills
            items={object('items', [
                {
                    text: 'Tops',
                    count: 2,
                },
                {
                    text: 'Bottoms',
                    count: 13,
                },
                {
                    text: 'Sweaters',
                    count: 100,
                },
            ])}
        />

        <style>{`
                .story {
                    align-items: center;
                    display: flex;
                    height: 100vh;
                    justify-content: center;
                    width: 100%;
                }
            `}</style>
    </StoryContainer>
))
