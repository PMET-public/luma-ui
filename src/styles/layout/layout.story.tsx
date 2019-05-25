import React from 'react'
import { storiesOf } from '@storybook/react'
import CodeBlock from '../../utilities/CodeBlock'
import './layout.story.less'
import { number } from '@storybook/addon-knobs'

storiesOf('💅 Styles', module)
    .add('📐 Layout', () => (

        <div className="container">
            <h2>CSS Variables</h2>
            <CodeBlock lang="css">{`
                :root {
                    --grid-width: ${number('--grid-width', 960)};
                    --grid-column-width: ${number('--grid-column-width', 60)};
                    --grid-columns: ${number('--grid-columns', 12)};
                }
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
                    @import "breakpoints.less";

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
