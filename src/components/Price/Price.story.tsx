import React from 'react'
import Price from './'
import { storiesOf } from '@storybook/react'
import { Story, StoryGlobalStyles } from '../../../.storybook/lib/Story.styled'
import styled from 'styled-components'
import { text, number, select } from '@storybook/addon-knobs'

const StoryContainer = styled(Story)`
    /* Story Styles */
    padding: 2rem;
`

storiesOf('📦 Components/Price', module).add('Default', () => (
    <StoryContainer>
        <StoryGlobalStyles centered />
        <Price
            currency={select('currency', { USD: 'USD', EUR: 'EUR' }, 'USD')}
            regular={number('regular', 9.99)}
            special={number('special', 4.99)}
            label={text('label', 'Starting at')}
        />
    </StoryContainer>
))
