import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import CodeBlock from '../src/utilities/CodeBlock'
import centered from '@storybook/addon-centered/react'
import GitHubButton from 'react-github-btn'
import { source } from 'common-tags'

storiesOf('👋 Welcome', module)
    .addDecorator(centered)
    .add('Getting Started', () => (
        <div className="container">
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
                yarn generate component FooBars
            `}</CodeBlock>


            <pre style={{ paddingLeft: '3rem', overflowX: 'auto' }}>
                <code>{source`
                    $ ./bin/generate.js component FooBar
                    👌 src/components/FooBar/FooBar.tsx created
                    👌 src/components/FooBar/FooBar.story.tsx created
                    👌 src/components/FooBar/index.ts created
                    👌 src/components/FooBar/FooBar.less created
                    ✨  Done in 0.18s.
                `}</code>
            </pre>

            <div style={{ padding: '3rem 0', textAlign: 'center' }}>
                <span style={{ display: 'inline-block', marginRight: '1rem' }}>
                    <GitHubButton href="https://github.com/PMET-public/luma-storybook/fork" data-icon="octicon-repo-forked" data-size="large" aria-label="Fork PMET-public/luma-storybook on GitHub">Fork</GitHubButton>
                </span>
                <span>
                    <GitHubButton href="https://github.com/PMET-public/luma-storybook/issues" data-icon="octicon-issue-opened" data-size="large" aria-label="Issue PMET-public/luma-storybook on GitHub">Issue</GitHubButton>
                </span>
            </div>
        </div>
    ))
