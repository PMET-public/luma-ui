import React from 'react'
import { storiesOf } from '@storybook/react'
import { Story, StoryGlobalStyles } from '../../.storybook/lib/Story.styled'
import styled from 'styled-components'

import CodeBlock from '../../.storybook/lib/CodeBlock'

const StoryContainer = styled(Story)`
    /* Story Styles */
    height: 100vh;
    padding: 2rem;
`

storiesOf('🖼 Theme', module).add('⚛️ ThemeProvider', () => (
    <StoryContainer>
        <StoryGlobalStyles />
        <h1>⚛️ ThemeProvider</h1>

        <hr />

        <CodeBlock lang="tsx">{`
            import ThemeProvider from 'luma-storybook/dist/theme'

            <ThemeProvider>
                {/* <App /> */}
            </ThemeProvider>
        `}</CodeBlock>
    </StoryContainer>
))
