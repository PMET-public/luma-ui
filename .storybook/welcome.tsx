import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import CodeBlock from './lib/CodeBlock'
import { source } from 'common-tags'

storiesOf('👋 Welcome', module).add('Getting Started', () => (
    <div className="story">
        <div className="story__item">
            <h2>☝️ Install Dependencies</h2>
            <CodeBlock lang="bash">{`
                yarn install
            `}</CodeBlock>
        </div>

        <div className="story__item">
            <h2>✌️ Run Storybook Locally</h2>
            <CodeBlock lang="bash">{`
                yarn dev
            `}</CodeBlock>
        </div>

        <div className="story__item">
            <h2>🤙 Generate New Component</h2>
            <CodeBlock lang="bash">{`
                yarn generate component FooBar
            `}</CodeBlock>

            <pre className="source">
                <code>{source`
                        ✨ src/components/FooBar/FooBar.tsx created
                        ✨ src/components/FooBar/FooBar.story.tsx created
                        ✨ src/components/FooBar/index.ts created
                        `}</code>
            </pre>
        </div>

        <div className="story__item">
            <h3> ... or a Page</h3>
            <CodeBlock lang="bash">{`
                yarn generate page FooBar
            `}</CodeBlock>

            <pre className="source">
                <code>{source`
                    ✨ src/pages/FooBar/FooBar.tsx created
                    ✨ src/pages/FooBar/FooBar.story.tsx created
                    ✨ src/pages/FooBar/index.ts created
                `}</code>
            </pre>
        </div>

        <style>{`
                body {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .story {
                    display: grid;
                    grid-gap: 5rem;
                    max-width: 96rem;
                    padding: 2rem;
                    width: 100%;
                }

                .story__item {
                    display: grid;
                    grid-gap: 2rem;
                }

                .source {
                    padding-left: 1.25rem; 
                    overflow: auto;
                }
            `}</style>
    </div>
))
