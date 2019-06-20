import React, { useContext, useEffect } from 'react'
import { storiesOf } from '@storybook/react'
import CodeBlock from '../../../.storybook/components/CodeBlock'
import './layout.story.less'
import { number } from '@storybook/addon-knobs'
import { ThemeContext } from '../ThemeProvider'

const ThemeUpdate = ({ theme }: any) => {
    const { set } = useContext(ThemeContext)
    useEffect(() => {
        set(theme)
    }, [theme])
    return null
}

storiesOf('🖼 Theme', module)
    .add('📐 Layout', () => (
        <div className="story--padded">
            <ThemeUpdate theme={{
                grid: {
                    columns: number('columns', 12),
                    columnWidth: number('columnWidth', 60),
                    width: number('width', 960),
                },
            }} />

            <h1>📐 Layout</h1>

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
        </div>
    ))
