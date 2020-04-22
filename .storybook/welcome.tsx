import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import CodeBlock from './lib/CodeBlock'
import { source } from 'common-tags'
import styled from 'styled-components'

const Story = styled.div`
    display: grid;
    grid-gap: 5rem;
    padding: 2rem;
`

const Section = styled.div`
    display: grid;
    grid-gap: 2rem;
`

const Source = styled.pre`
    padding-left: 1.25rem;
    overflow: auto;
`

storiesOf('👋 Welcome', module).add('Getting Started', () => (
    <Story>
        <Section>
            <h2>🤙 Generate New Component</h2>
            <CodeBlock lang="bash">{`
                    yarn generate component FooBar
                `}</CodeBlock>

            <Source>
                <code>{source`
                    ✨ src/components/FooBar/FooBar.tsx created
                    ✨ src/components/FooBar/FooBar.styled.tsx created
                    ✨ src/components/FooBar/FooBar.story.tsx created
                    ✨ src/components/FooBar/index.ts created
                `}</code>
            </Source>
        </Section>
    </Story>
))
