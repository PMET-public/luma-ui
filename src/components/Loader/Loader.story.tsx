import React from 'react'
import Loader from './'
import { storiesOf } from '@storybook/react'
import { Story, StoryGlobalStyles } from '../../../.storybook/lib/Story.styled'
import styled from 'styled-components'

const StoryContainer = styled(Story)`
    /* Story Styles */
    padding: 3rem;
`

storiesOf('📦 Components/Loader', module).add('Default', () => (
    <StoryContainer>
        <StoryGlobalStyles centered />

        <Loader label="Loading" />
    </StoryContainer>
))
