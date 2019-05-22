import React from 'react'
import { storiesOf } from '@storybook/react'
import CodeBlock from '../components/CodeBlock'
import centered from '@storybook/addon-centered/react'


storiesOf('Styles/📝 Typography', module)
    .addDecorator(centered)
    .add('Headings', () => (
        <div className="container">
            <h1>Heading Level One</h1>
            <CodeBlock language="html">{`
                <h1>Heading Level One</h1>
            `}</CodeBlock>
                
            <hr />

            <h2>Heading Level Two</h2>
            <CodeBlock language="html">{`
                <h2>Heading Level Two</h2>
            `}</CodeBlock>
            
            <hr />

            <h3>Heading Level Three</h3>
            <CodeBlock language="html">{`
                <h3>Heading Level Three</h3>
            `}</CodeBlock>
            
            <hr />

            <h4>Heading Level Four</h4>
            <CodeBlock language="html">{`
                <h4>Heading Level Four</h4>
            `}</CodeBlock>
            
            <hr />

            <h5>Heading Level Five</h5>
            <CodeBlock language="html">{`
                <h5>Heading Level Five</h5>
            `}</CodeBlock>
            
            <hr />

            <h6>Heading Level Six</h6>
            <CodeBlock language="html">{`
                <h6>Heading Level Six</h6>
            `}</CodeBlock>
            

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

            <CodeBlock language="html">{`
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
            <h1>Lists</h1>
            <hr/>

            <ul>
                <li>The first item in a list</li>
                <li>Hey, it's the second!</li>
                <li>What have you heard about the third?</li>
                <li>Well everone has heard that the third is the word</li>
            </ul>

            <CodeBlock language="html">{`
                <ul>
                    <li>The first item in a list</li>
                    <li>Hey, it's the second!</li>
                    <li>What have you heard about the third?</li>
                    <li>Well everone has heard that the third is the word</li>
                </ul>
            `}</CodeBlock>
            
            <hr/>

            <ol>
                <li>How many ways can we list?</li>
                <li>Let us numerate the ways</li>
                <li>Yarp</li>
            </ol>

            <CodeBlock language="html">{`
                <ol>
                    <li>How many ways can we list?</li>
                    <li>Let us numerate the ways</li>
                    <li>Yarp</li>
                </ol>
            `}</CodeBlock>
        

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
            
            <CodeBlock language="html">{`
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
            <blockquote>
                Wow, this quote is so wonderful. I hope cheese quickly zaps a large mule.
            </blockquote>
            
            <CodeBlock language="html">{`
                <blockquote>
                    Wow, this quote is so wonderful. I hope cheese quickly zaps a large mule.
                </blockquote>
            `}</CodeBlock>
            
        </div>
    ))

