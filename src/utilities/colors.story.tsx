import React from 'react'
import { storiesOf } from '@storybook/react'
import ColorSwatch from './ColorSwatch'
import CodeBlock from './CodeBlock'
import { color } from '@storybook/addon-knobs'

storiesOf('💅 Styles', module)
    .add('🎨 Colors', () => (
        <div className="container">
            <h2> CSS Variables </h2>
            <CodeBlock render={true} lang="css">{`
                /**
                 * Theme Colors
                 */

                :root {
                    --color-background: ${color('--color-background', '#fff')};
                    --color-on-background: ${color('--color-on-background', '#222')};

                    --color-surface: ${color('--color-surface', '#fff')};
                    --color-on-surface: ${color('--color-on-surface', '#222')};

                    --color-primary: ${color('--color-primary', '#f46f25')};
                    --color-on-primary: ${color('--color-on-primary', '#fff')};

                    --color-secondary: ${color('--color-secondary', 'rgb(37, 169, 225)')};
                    --color-on-secondary: ${color('--color-on-secondary', '#fff')};

                    --color-error: ${color('--color-error', '#b00020')};
                    --color-on-error: ${color('--color-on-error', '#fff')};
                }
            `}</CodeBlock>

            <hr />

            <div className="global-colors color-background grid">
                <ColorSwatch color="background" />
                <ColorSwatch color="surface" />
                <ColorSwatch color="primary" />
                <ColorSwatch color="secondary" />
                <ColorSwatch color="error" />
            </div>
            
            <CodeBlock lang="less" render={true}>{`
                @import "breakpoints.less";

                .global-colors {
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
