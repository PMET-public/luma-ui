import React from 'react'
import CodeBlock from '.'
import centered from '@storybook/addon-centered/react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'

storiesOf('🏗 Utilities/CodeBlock', module)
    .addDecorator(centered)
    .add('Default', () => (
        <CodeBlock>Psst... Copy me!</CodeBlock>
    ))
    .add('css', () => (
        <div className="wrapper">

        <CodeBlock 
            lang="css"
            render={select('render', { true: true, false: false }, true)}
            showSource={select('showSource', { true: true, false: false }, true)}
            >{`
                .wrapper {
                    background-color: #eee;
                    padding: 3rem;
                    border-radius: 3rem;
                }
            `}</CodeBlock>
        </div>
    ))
    .add('less', () => (
        <div className="wrapper">

        <CodeBlock 
            lang="less"
            render={select('render', { true: true, false: false }, true)}
            showSource={select('showSource', { true: true, false: false }, true)}
            >{`
                @import "breakpoints";

                .wrapper {
                    background-color: #eee;
                    padding: 3rem;
                    border-radius: 3rem;

                    @media @medium-screen {
                        background-color: cyan;
                    }

                    @media @large-screen {
                        background-color: yellow;
                    }
                }
            `}</CodeBlock>
        </div>
    ))
    .add('js', () => (
        <div className="wrapper">

        <CodeBlock 
            lang="js"
            render={select('render', { true: true, false: false }, true)}
            showSource={select('showSource', { true: true, false: false }, true)}
            >{`
                console.log('🏡 I live in the console')
            `}</CodeBlock>
        </div>
    ))
    .add('html', () => (
        <div className="wrapper">

        <CodeBlock 
            lang="html"
            render={select('render', { true: true, false: false }, true)}
            showSource={select('showSource', { true: true, false: false }, true)}
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
