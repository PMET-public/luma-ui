import React from 'react'
import CodeBlock from '.'
import centered from '@storybook/addon-centered/react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'

storiesOf('🏗 Utilities/CodeBlock', module)
    .addDecorator(centered)
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

                @import "breakpoints.less";

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
        <CodeBlock lang="js">{`
                console.log('🏡 I live in the console')
        `}</CodeBlock>
    ))
    .add('html', () => (
        <div className="wrapper">

        <CodeBlock 
            lang="html"
            render={select('render', { true: true, false: false }, true)}
            >{`
                <h1>My name is Header</h1>  
            `}</CodeBlock>
        </div>
    ))

    .add('jsx', () => (
        <div className="wrapper">

        <CodeBlock lang="jsx">{`
                <MyComponent someProp="someValue">
                    My name is React Component
                </MyComponent>  
            `}</CodeBlock>
        </div>
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
