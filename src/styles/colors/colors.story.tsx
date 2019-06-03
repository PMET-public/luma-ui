import React from 'react'
import { storiesOf } from '@storybook/react'
import ColorSwatch from '../../utilities/ColorSwatch'
import CodeBlock from '../../utilities/CodeBlock'
import { color } from '@storybook/addon-knobs'
import './colors.story.less'

storiesOf('💅 Styles', module)
    .add('🎨 Colors', () => (
        <div className="container">
            <h2> CSS Variables </h2>
            <CodeBlock render={true} lang="css">{`
                /**
                 * Theme Colors
                 */

                :root {
                    --color-link: ${color('--color-link', 'rgb(37, 169, 225)')};
                    --color-link--hover: ${color('--color-link--hover', 'rgb(25, 136, 184)')};

                    --color-background: ${color('--color-background', '#fff')};
                    --color-on-background: ${color('--color-on-background', '#222')};

                    --color-surface: ${color('--color-surface', '#fff')};
                    --color-on-surface: ${color('--color-on-surface', '#222')};

                    --color-primary: ${color('--color-primary', '#f46f25')};
                    --color-primary--hover: ${color('--color-primary--hover', 'rgb(219, 85, 11)')};
                    --color-on-primary: ${color('--color-on-primary', '#fff')};
                    --color-on-primary--hover: ${color('--color-on-primary--hover', '#fff')};

                    --color-secondary: ${color('--color-secondary', 'rgb(37, 169, 225)')};
                    --color-on-secondary: ${color('--color-on-secondary', '#fff')};
                    --color-secondary--hover: ${color('--color-secondary--hover', 'rgb(25, 136, 184)')};
                    --color-on-secondary--hover: ${color('--color-on-secondary--hover', '#fff')};

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
        </div>
    ))
