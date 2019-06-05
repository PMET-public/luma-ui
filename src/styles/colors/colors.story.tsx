import React from 'react'
import { storiesOf } from '@storybook/react'
import ColorSwatch from '../../utilities/ColorSwatch'
import CodeBlock from '../../utilities/CodeBlock'
import './colors.story.less'
import { color } from '@storybook/addon-knobs'

// tslint:disable-next-line: no-string-literal
window['createTheme'] = require('../../lib/theme').createTheme

const colorKnobs = (variable: string, values: [string, string]) => `['${color(variable, values[0])}', '${color(`${variable} (dark)`, values[1])}']`

storiesOf('💅 Styles', module)
    .add('🎨 Colors', () => (
        <div className="container">
            <h1>🎨 Colors</h1>
            
            <CodeBlock lang="js">{`
                import { createTheme } from 'luma-storybook/dist/theme'
            `}</CodeBlock>

            <hr/>

            <CodeBlock lang="js" render={true}>{`
                createTheme({
                    colors: {
                        link: ${colorKnobs('link', ['#263238', '#ECEFF1'])},
                        linkHover: ${colorKnobs('link', ['#37474F', '#ECEFCFD8DCF1'])},

                        background: ${colorKnobs('background', ['#fff', '#222'])},
                        onBackground: ['#222', '#fff'],

                        surface: ${colorKnobs('surface', ['#fff', '#222'])},
                        onSurface: ${colorKnobs('onSurface', ['#222', '#fff'])},

                        primary: ${colorKnobs('primary', ['#111', '#fff'])},
                        onPrimary: ${colorKnobs('onPrimary', ['#fff', '#111'])},

                        secondary: ${colorKnobs('secondary', ['#212121', '#fafafa'])},
                        onSecondary: ${colorKnobs('onSecondary', ['#fafafa', '#212121'])},

                        error: ${colorKnobs('error', ['#fff', '#222'])},
                        onError: ${colorKnobs('onError', ['#ef5350', '#ef5350'])},

                        warning: ${colorKnobs('warning', ['#fff', '#222'])},
                        onWarning: ${colorKnobs('onWarning', ['#f57c00', '#ffd54f'])},

                        notice: ${colorKnobs('notice', ['#fff', '#222'])},
                        onNotice: ${colorKnobs('onNotice', ['#039be5', '#e1f5fe'])},
                    }
                })
            `}</CodeBlock>

            <hr />

            <div className="global-colors color-background grid">
                <ColorSwatch color="background" />
                <ColorSwatch color="surface" />
                <ColorSwatch color="primary" />
                <ColorSwatch color="secondary" />
                <ColorSwatch color="error" />
                <ColorSwatch color="warning" />
                <ColorSwatch color="notice" />
            </div>
        </div>
    ))
