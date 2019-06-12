import React from 'react'
import CodeBlock from '.'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'

storiesOf('🏗 Utilities/CodeBlock', module)
    .add('css', () => (
        <CodeBlock 
            lang="css"
            render={select('render', { true: true, false: false }, true)}
        >{`
            :root {
                background-color: var(--color-secondary);
                padding: 3rem;
                border-radius: 3rem;
            }
        `}</CodeBlock>
    ))
    .add('less', () => (
        <CodeBlock 
            lang="less"
            render={select('render', { true: true, false: false }, true)}
        >{`
                // Resize me ↔

                @import "utilities.less";

                :root {
                    background-color: var(--color-primary);
                    padding: 3rem;
                    border-radius: 3rem;

                    @media @medium-screen {
                        background-color: var(--color-secondary);
                    }

                    @media @large-screen {
                        background-color: var(--color-background);
                    }
                }
        `}</CodeBlock>
    ))
    .add('js', () => (
        <CodeBlock 
            lang="js"
            render={select('render', { true: true, false: false }, true)}
        >{`
                console.log('🏡 I live in the console')
        `}</CodeBlock>
    ))
    .add('html', () => (
        <CodeBlock 
            lang="html"
            render={select('render', { true: true, false: false }, true)}
        >{` 
                <h1>My name is Header</h1>  
        `}</CodeBlock>
    ))

    .add('jsx', () => (
        <CodeBlock lang="jsx">{`
                <MyComponent someProp="someValue">
                    My name is React Component
                </MyComponent>  
        `}</CodeBlock>
    ))

    .add('tsx', () => (
        <CodeBlock lang="tsx">{`
            import React, { Fragment, FunctionComponent } from 'react'

            export type FooProps = { }
            
            export const Foo: FunctionComponent<FooProps> = ({ }) => (
                <Fragment>
                    <div className="foo">👋 Hi, I'm Foo</div>
                </Fragment>
            )
        `}</CodeBlock>
    ))
