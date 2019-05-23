import React from 'react'
import { storiesOf } from '@storybook/react'
import ColorSwatch from '../utilities/ColorSwatch'
import CodeBlock from '../utilities/CodeBlock'
import { color } from '@storybook/addon-knobs'

storiesOf('💅 Styles', module)
    .add('🎨 Colors', () => (
        <div className="container">

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
                    --color-on-secondary: ${color('--color-secondary', '#fff')};

                    --color-error: ${color('--color-error', '#b00020')};
                    --color-on-error: ${color('--color-error', 'white')};
                }
            `}</CodeBlock>

            <hr/>

            <div className="grid global-colors color-background">
                <ColorSwatch color="background" />
                <ColorSwatch color="surface" />
                <ColorSwatch color="primary" />
                <ColorSwatch color="secondary" />
                <ColorSwatch color="error" />
            </div>

            <style>{`
                @media (min-width: 768px) {
                    .global-colors {
                        --columns: 2;
                    }
                }

                @media (min-width: 1224px) {
                    .global-colors {
                        --columns: 3;
                    }
                }
            `}</style>
        </div>
    ))
