import React from 'react'
import Html from './'
import { storiesOf } from '@storybook/react'
import { Story, StoryGlobalStyles } from '../../../.storybook/lib/Story.styled'
import styled from 'styled-components'
import { text } from '@storybook/addon-knobs'
import { stripIndent } from 'common-tags'

const StoryContainer = styled(Story)`
    /* Story Styles */
    padding: 2rem;
    min-width: 80vw;
`

storiesOf('📦 Components/Html', module).add('Default', () => (
    <StoryContainer>
        <StoryGlobalStyles centered />
        <Html
            source={text(
                'source',
                stripIndent`
                <h1>Html Block</h1>
                <p>
                    I'm a paragraph
                </p>
                
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li
                ></ul>
            `
            )}
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
