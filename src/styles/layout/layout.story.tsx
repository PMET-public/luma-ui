import React from 'react'
import { storiesOf } from '@storybook/react'
import CodeBlock from '../../utilities/CodeBlock'
import './layout.story.less'

// tslint:disable-next-line: no-string-literal
// window['createTheme'] = require('../../styles').createTheme

storiesOf('💅 Styles', module)
    .add('📐 Layout', () => (

        <div className="container">
            <h1>📐 Layout</h1>

            <CodeBlock lang="js">{`
                import { createTheme } from 'luma-storybook/dist/theme'
            `}</CodeBlock>
            
            <hr/>

            <CodeBlock lang="js" render={false}>{`
                createTheme({
                    grid: {
                        columns: 12,
                        columnWidth: 60,
                        width: 960,
                    }
                })
            `}</CodeBlock>

            <hr />
            
            <h2>Breakpoints</h2>

            <div className="global-layout-breakpoints grid">
                <CodeBlock lang="less">{`
                    @media @medium-screen {
                        // ...
                    }
                `}</CodeBlock>

                <CodeBlock lang="less">{`
                    @media @large-screen {
                        // ...
                    }
                `}</CodeBlock>

                <CodeBlock lang="less">{`
                    @media @xlarge-screen {
                        // ...
                    }
                `}</CodeBlock>
            </div>

            <hr />

            <h2>Grid</h2>
            
            <div className="global-layout__codeblock">
                <CodeBlock render={true} lang="html">{`
                    <div class="my-html-element grid">
                        <div>Uno</div>
                        <div>Dos</div>
                        <div>Tres</div>
                        <div>Catorce 🎶</div>
                    </div>
                `}</CodeBlock>
            </div>
            
            <div className="global-layout__codeblock">
                <CodeBlock render={true} lang="less">{`
                    @import "utilities.less";

                    .my-html-element {
                        @media @medium-screen {
                            --columns: 2;
                        }

                        @media @large-screen {
                            --columns: 4;
                        }
                    }
                `}</CodeBlock>
            </div>
        </div>
    ))
