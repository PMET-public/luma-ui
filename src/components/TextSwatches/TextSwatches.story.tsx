import React from 'react'
import TextSwatches from './'
import { storiesOf } from '@storybook/react'
import { Story, StoryGlobalStyles } from '../../../.storybook/lib/Story.styled'
import styled from 'styled-components'
import { object } from '@storybook/addon-knobs'

const StoryContainer = styled(Story)`
    /* Story Styles */
    padding: 2rem;
    width: 40rem;
`

storiesOf('📦 Components/TextSwatches', module).add('Default', () => (
    <StoryContainer>
        <StoryGlobalStyles centered />
        <TextSwatches
            items={object('list', [
                { text: '2', as: 'button', disabled: true },
                { text: '4', active: true, as: 'button' },
                { text: '6' },
                { text: '8' },
            ])}
        />
    </StoryContainer>
))
