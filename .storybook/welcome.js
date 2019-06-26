import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import CodeBlock from './components/CodeBlock'
import GitHubButton from 'react-github-btn'
import { source } from 'common-tags'

storiesOf('👋 Welcome', module)
    .add('Getting Started', () => (
        <div className="story">
            <h2>☝️ Install Dependencies</h2>
            <CodeBlock lang="bash">{`
                yarn install
            `}</CodeBlock>

            <h2>✌️ Run Storybook Locally</h2>
            <CodeBlock lang="bash">{`
                yarn dev
            `}</CodeBlock>

            <h2>🤙 Generate New Component</h2>
            <CodeBlock lang="bash">{`
                yarn generate component FooBar
            `}</CodeBlock>


            <pre className="source">
                <code>{source`
                    $ ./bin/generate.js component FooBar
                    👌 src/components/FooBar/FooBar.tsx created
                    👌 src/components/FooBar/FooBar.story.tsx created
                    👌 src/components/FooBar/index.ts created
                    ✨  Done in 0.18s.
                `}</code>
            </pre>

            <div className="github-buttons">
                <GitHubButton href="https://github.com/PMET-public/luma-storybook/fork" data-icon="octicon-repo-forked" data-size="large" aria-label="Fork PMET-public/luma-storybook on GitHub">Fork</GitHubButton>
                <GitHubButton href="https://github.com/PMET-public/luma-storybook/issues" data-icon="octicon-issue-opened" data-size="large" aria-label="Issue PMET-public/luma-storybook on GitHub">Issue</GitHubButton>
            </div>

            <style global jsx>{`
                .theme-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    height: 100%;  
                    width: 100%;  
                    left: 0;
                    top: 0;
                }
            `}</style>

            <style jsx>{`
                h2 {
                    margin-top: 4rem;
                }

                .source {
                    padding-left: 1.25rem; 
                    overflow: auto;
                    margin-top: 2rem;
                }

                .github-buttons {
                    padding: 2rem 0; 
                    text-align: center;
                }

                .github-buttons > * {
                    margin: 0 1rem;
                }
            `}</style>
        </div>
    ))
