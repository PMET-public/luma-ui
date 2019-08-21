import React from 'react'
import Accordion, { Content } from './'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'
import { StoryGlobalStyles, Story } from '../../../.storybook/lib/Story.styled'
import styled from 'styled-components'

const StoryContainer = styled(Story)`
    width: 90vw;

    ${Content} {
        font-size: 4rem;
    }
`

storiesOf('📦 Components/Accordion', module).add('Default', () => (
    <StoryContainer>
        <StoryGlobalStyles centered />

        <Accordion selected={number('selected', 0)}>
            <Accordion.Item label="Uno">👋</Accordion.Item>
            <Accordion.Item label="Dos">👐</Accordion.Item>
            <Accordion.Item label="Tres">🥴</Accordion.Item>
        </Accordion>
    </StoryContainer>
))
