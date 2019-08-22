import React from 'react'
import ViewLoader from '.'
import { storiesOf } from '@storybook/react'
import { Story, StoryGlobalStyles } from '../../../.storybook/lib/Story.styled'
import styled from 'styled-components'

const StoryContainer = styled(Story)`
    /* Story Styles */
`

storiesOf('📦 Components/ViewLoader', module).add('Default', () => (
    <StoryContainer>
        <StoryGlobalStyles />

        <ViewLoader />
    </StoryContainer>
))
