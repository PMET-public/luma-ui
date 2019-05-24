import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import CodeBlock from '../src/utilities/CodeBlock'
import centered from '@storybook/addon-centered/react'
import GitHubButton from 'react-github-btn'

storiesOf('👋 Welcome', module)
    .addDecorator(centered)
    .add('Getting Started', () => (
        <Fragment>
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
                yarn generate ComponentName
            `}</CodeBlock>

            <div className="global-welcome__buttons">
                <GitHubButton href="https://github.com/PMET-public/luma-storybook/fork" data-icon="octicon-repo-forked" data-size="large" aria-label="Fork PMET-public/luma-storybook on GitHub">Fork</GitHubButton>
                <GitHubButton href="https://github.com/PMET-public/luma-storybook/issues" data-icon="octicon-issue-opened" data-size="large" aria-label="Issue PMET-public/luma-storybook on GitHub">Issue</GitHubButton>
            </div>
        </Fragment>
    ))
