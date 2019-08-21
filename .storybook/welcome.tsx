import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import CodeBlock from './lib/CodeBlock'
import GitHubButton from 'react-github-btn'
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

        <div className="github-buttons">
            <GitHubButton
                href="https://github.com/PMET-public/luma-storybook/fork"
                data-icon="octicon-repo-forked"
                data-size="large"
                aria-label="Fork PMET-public/luma-storybook on GitHub"
            >
                Fork
            </GitHubButton>
            <GitHubButton
                href="https://github.com/PMET-public/luma-storybook/issues"
                data-icon="octicon-issue-opened"
                data-size="large"
                aria-label="Issue PMET-public/luma-storybook on GitHub"
            >
                Issue
            </GitHubButton>
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

                .github-buttons {
                    display: grid;
                    grid-auto-flow: column;
                    grid-gap: 1.4rem;
                    grid-template-columns: max-content;
                    justify-self: center;
                }
            `}</style>
    </div>
))
