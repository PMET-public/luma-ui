import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import ColorSwatch from '../utilities/ColorSwatch'
import centered from '@storybook/addon-centered/react'
import CodeBlock from '../utilities/CodeBlock'

storiesOf('💅 Styles/🎨 Colors', module)
    .addDecorator(centered)
    .add('Variables', () => (
        <CodeBlock language="css">{`
            :root {
                --color-background: #fff;
                --color-on-background: #222;

                --color-surface: #fff;
                --color-on-surface: #222;

                --color-primary: #f46f25;
                --color-on-primary:#fff;

                --color-secondary: rgb(37, 169, 225);
                --color-on-secondary: #fff;

                --color-error: #b00020;
                --color-on-error: white;

                --color-code: rgba(0, 0, 0, 0.75);
                --color-on-code: white;
            }
        `}</CodeBlock>
    ))
    .add('Theme', () => (
        <Fragment>

            <div className="container grid global-colors color-background">
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
        </Fragment>
    ))
