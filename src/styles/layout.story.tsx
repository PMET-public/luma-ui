import React from 'react'
import { storiesOf } from '@storybook/react'
import CodeBlock from '../utilities/CodeBlock'

storiesOf('💅 Styles', module)
    .add('📐 Layout', () => (

        <div className="container">
            <CodeBlock lang="css">{`
                :root {
                    --grid-width: 960;
                    --grid-column-width: 60;
                    --grid-columns: 12;
                }
            `}</CodeBlock>

            <hr />
            
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

            <CodeBlock render={true} lang="html">{`
                <div class="my-html-element grid">
                    <div>Uno</div>
                    <div>Dos</div>
                    <div>Tres</div>
                    <div>Catorce 🎶</div>
                </div>
            `}</CodeBlock>
            
            <br/>
            
            <CodeBlock render={true} lang="less">{`
                @import "/breakpoints.less";

                .my-html-element {
                    @media @medium-screen {
                        --columns: 2;
                    }

                    @media @large-screen {
                        --columns: 4;
                    }
                }
            `}</CodeBlock>

            <CodeBlock lang="less" render={true} showSource={false}>{`
                @import "/breakpoints.less";

                .my-html-element > div {
                    align-items: center;
                    background-color: var(--color-surface);
                    border-radius: 2rem;
                    box-shadow: 0.1rem 0 1rem #ccc;
                    color: var(--color-on-surface);
                    display: flex; 
                    justify-content: center;
                    padding: 4rem 2rem;
                }
                
                .global-layout-source {
                    @media @medium-screen {
                        --columns: 2;
                    }
                }

                .global-layout-breakpoints {
                    @media @medium-screen {
                        --columns: 2;
                    }
                    @media @large-screen {
                        --columns: 3;
                    }
                }
            `}</CodeBlock>
        </div>
    ))
