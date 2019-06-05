import React from 'react'
import CodeBlock from '.'
import centered from '@storybook/addon-centered/react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'

storiesOf('🏗 Utilities/CodeBlock', module)
    .addDecorator(centered)
    .add('css', () => (
        <div className="container">
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
        </div>
    ))
    .add('less', () => (
        <div className="container">
            <CodeBlock 
                lang="less"
                render={select('render', { true: true, false: false }, true)}
            >{`
                    // Resize me ↔

                    @import "/utilities";

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
        </div>
    ))
    .add('js', () => (
        <div className="container">
            <CodeBlock lang="js">{`
                    console.log('🏡 I live in the console')
            `}</CodeBlock>
        </div>
    ))
    .add('html', () => (
        <div className="container">
            <CodeBlock 
                lang="html"
                render={select('render', { true: true, false: false }, true)}
            >{` 
                    <h1>My name is Header</h1>  
            `}</CodeBlock>
        </div>
    ))

    .add('jsx', () => (
        <div className="container">
            <CodeBlock lang="jsx">{`
                    <MyComponent someProp="someValue">
                        My name is React Component
                    </MyComponent>  
            `}</CodeBlock>
        </div>
    ))

    .add('tsx', () => (
        <div className="container">
            <CodeBlock lang="tsx">{`
                import React, { Fragment, FunctionComponent } from 'react'

                export type FooProps = { }
                
                export const Foo: FunctionComponent<FooProps> = ({ }) => (
                    <Fragment>
                        <div className="foo">👋 Hi, I'm Foo</div>
                    </Fragment>
                )
            `}</CodeBlock>
        </div>
    ))
