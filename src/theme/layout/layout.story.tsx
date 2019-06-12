import React from 'react'
import { storiesOf } from '@storybook/react'
import CodeBlock from '../../utilities/CodeBlock'
import './layout.story.less'
import { number } from '@storybook/addon-knobs'

storiesOf('🖼 Theme', module)
    .add('📐 Layout', () => {
        const columns = number('columns', 12)
        const columnWidth = number('columnWidth', 60)
        const width = number('width', 960)

        return (
            <React.Fragment>
                <h1>📐 Layout</h1>

                <style>{`
                    :root {
                        /**
                         * Layout
                         */
                        --grid-width: ${width};
                        --grid-column-width: ${columnWidth};
                        --grid-columns: ${columns};
                    }
                `}</style>

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
                        <div class="my-html-element">
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
                            .grid(); // <- Grid Mixin

                            @media @medium-screen {
                                --columns: 2;
                            }

                            @media @large-screen {
                                .grid.auto();
                            }
                        }
                    `}</CodeBlock>
                </div>
            </React.Fragment>
        )
    })
