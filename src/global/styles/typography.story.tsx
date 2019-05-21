import React from 'react'
import { storiesOf } from '@storybook/react'
import CopyToClipboard from '../../components/CopyToClipboard';
import centered from '@storybook/addon-centered';


storiesOf('🌎 Global/📝 Typography', module)
    .addDecorator(centered)
    .add('Headings', () => (
        <div className="container">
            <h1>Heading Level One</h1>
                <code>
                    <CopyToClipboard label="html">{`
                        <h1>Heading Level One</h1>
                    `}</CopyToClipboard>
                </code>
            <hr />

            <h2>Heading Level Two</h2>
            <code>
                <CopyToClipboard label="html">{`
                    <h2>Heading Level Two</h2>
                `}</CopyToClipboard>
            </code>
            <hr />

            <h3>Heading Level Three</h3>
            <code>
                <CopyToClipboard label="html">{`
                    <h3>Heading Level Three</h3>
                `}</CopyToClipboard>
            </code>
            <hr />

            <h4>Heading Level Four</h4>
            <code>
                <CopyToClipboard label="html">{`
                    <h4>Heading Level Four</h4>
                `}</CopyToClipboard>
            </code>
            <hr />

            <h5>Heading Level Five</h5>
            <code>
                <CopyToClipboard label="html">{`
                    <h5>Heading Level Five</h5>
                `}</CopyToClipboard>
            </code>
            <hr />

            <h6>Heading Level Six</h6>
            <code>
                <CopyToClipboard label="html">{`
                    <h6>Heading Level Six</h6>
                `}</CopyToClipboard>
            </code>

        </div>
    ))
    .add('Paragraphs', () => (
        <div className="container">
            <h1>Paragraphs</h1>
            <hr/>
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

            <code>
                <CopyToClipboard label="html">{`
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
                `}</CopyToClipboard>
            </code>
        </div>
    ))

    .add('Lists', () => (
        <div className="container">
            <h1>Lists</h1>
            <hr/>

            <ul>
                <li>The first item in a list</li>
                <li>Hey, it's the second!</li>
                <li>What have you heard about the third?</li>
                <li>Well everone has heard that the third is the word</li>
            </ul>

            <code>
                <CopyToClipboard label="html">{`
                    <ul>
                        <li>The first item in a list</li>
                        <li>Hey, it's the second!</li>
                        <li>What have you heard about the third?</li>
                        <li>Well everone has heard that the third is the word</li>
                    </ul>
                `}</CopyToClipboard>
            </code>

            <hr/>

            <ol>
                <li>How many ways can we list?</li>
                <li>Let us numerate the ways</li>
                <li>Yarp</li>
            </ol>

            <code>
                <CopyToClipboard label="html">{`
                    <ol>
                        <li>How many ways can we list?</li>
                        <li>Let us numerate the ways</li>
                        <li>Yarp</li>
                    </ol>
                `}</CopyToClipboard>
            </code>

            <hr/>

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
            
            <code>
                <CopyToClipboard label="html">{`
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
                `}</CopyToClipboard>
            </code>
        </div>
    ))
    .add('Quote', () => (
        <div className="container">
            <blockquote>
                Wow, this quote is so wonderful. I hope cheese quickly zaps a large mule.
            </blockquote>
            <code>
                <CopyToClipboard label="html">{`
                    <blockquote>
                        Wow, this quote is so wonderful. I hope cheese quickly zaps a large mule.
                    </blockquote>
            `}</CopyToClipboard>
            </code>
        </div>
    ))



