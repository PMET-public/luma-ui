import React from 'react'
import Button from './'
import { storiesOf } from '@storybook/react'
import { Story, StoryGlobalStyles } from '../../../.storybook/lib/Story.styled'
import styled from 'styled-components'
import { text, select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

const StoryContainer = styled(Story)`
    /* Story Styles */
    padding: 2rem;
`

storiesOf('📦 Components/Button', module).add('Default', () => (
    <StoryContainer>
        <StoryGlobalStyles centered />
        <Button
            color={select('color', { primary: 'primary', secondary: 'secondary' }, undefined)}
            fill={boolean('fill', false)}
            text={text('text', 'Button')}
            onClick={action('onClick')}
        />
    </StoryContainer>
))
