import React from 'react'
import { storiesOf } from '@storybook/react'
import CodeBlock from '../utilities/CodeBlock'
import centered from '@storybook/addon-centered/react'

storiesOf('💅 Styles/📝 Typography', module)
    .addDecorator(centered)
    .add('Variables', () => (
        <CodeBlock lang="css">{`
            :root {
                --font-size-base: 10px;
                --font-family-body: source-sans-pro, sans-serif;
                --font-weight-body: 400;
                --font-style-body: normal;
                --font-family-heading: rucksack, sans-serif;
                --font-weight-heading: 400;
                --font-style-heading: normal;
            }
        `}</CodeBlock>
    ))
    .add('Headings', () => (
        <div className="container">
            <CodeBlock render={true} lang="html">{`
                <h1>Heading Level One</h1>
            `}</CodeBlock>

            <hr />

            <CodeBlock  render={true} lang="html">{`
                <h2>Heading Level Two</h2>
            `}</CodeBlock>

            <hr />

            <CodeBlock render={true} lang="html">{`
                <h3>Heading Level Three</h3>
            `}</CodeBlock>

            <hr />

            <CodeBlock render={true} lang="html">{`
                <h4>Heading Level Four</h4>
            `}</CodeBlock>

            <hr />

            <CodeBlock render={true} lang="html">{`
                <h5>Heading Level Five</h5>
            `}</CodeBlock>

            <hr />

            <CodeBlock render={true} lang="html">{`
                <h6>Heading Level Six</h6>
            `}</CodeBlock>

        </div>
    ))
    .add('Paragraphs', () => (
        <div className="container">
            <CodeBlock render={true} lang="html">{`
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
            `}</CodeBlock>

        </div>
    ))

    .add('Lists', () => (
        <div className="container">
            <CodeBlock render={true} lang="html">{`
                <ul>
                    <li>The first item in a list</li>
                    <li>Hey, it's the second!</li>
                    <li>What have you heard about the third?</li>
                    <li>Well everone has heard that the third is the word</li>
                </ul>
            `}</CodeBlock>

            <hr/>

            <CodeBlock render={true} lang="html">{`
                <ol>
                    <li>How many ways can we list?</li>
                    <li>Let us numerate the ways</li>
                    <li>Yarp</li>
                </ol>
            `}</CodeBlock>

            <hr/>

            <CodeBlock render={true} lang="html">{`
                <ul>
                    <li>Don't nest me bro</li>
                    <li>
                        Oh ya?
                    <ul>
                            <li>Can you even</li>
                            <li>handle this?</li>
                        </ul>
                    </li>
                    <li>Probably not. Just leave.</li>
                </ul>
            `}</CodeBlock>

        </div>
    ))
    .add('Quote', () => (
        <div className="container">
            <CodeBlock render={true} lang="html">{`
                <blockquote>
                    Wow, this quote is so wonderful. I hope cheese quickly zaps a large mule.
                </blockquote>
            `}</CodeBlock>
        </div>
    ))
