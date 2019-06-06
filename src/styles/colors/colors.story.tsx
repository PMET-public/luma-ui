import React from 'react'
import { storiesOf } from '@storybook/react'
import ColorSwatch from '../../utilities/ColorSwatch'
import CodeBlock from '../../utilities/CodeBlock'
import './colors.story.less'
import { color } from '@storybook/addon-knobs'

storiesOf('💅 Styles', module)
    .add('🎨 Colors', () => {

        const link = color('link', '#263238')
        const linkHover = color('linkHover', '#37474F')
        const background = color('background', '#fff')
        const onBackground = color('onBackground', '#222')
        const surface = color('surface', '#fff')
        const onSurface = color('onSurface', '#222')
        const primary = color('primary', '#111')
        const onPrimary = color('onPrimary', '#fff')
        const secondary = color('secondary', '#212121')
        const onSecondary = color('onSecondary', '#fafafa')
        const error = color('error', 'transparent')
        const onError = color('onError', '#ef5350')
        const warning = color('warning', 'transparent')
        const onWarning = color('onWarning', '#f57c00')
        const notice = color('notice', 'transparent')
        const onNotice = color('onNotice', '#039be5')
        
        return (
            <div className="container">
                <h1>🎨 Colors</h1>

                <CodeBlock lang="jsx">{`

                    import ThemeProvider from 'luma-storybook/dist/lib/theme'

                    <ThemeProvider theme={{
                        colors: {
                            link: '${link}',
                            linkHover: '${linkHover}',
                    
                            background: '${background}',
                            onBackground: '${onBackground}',
                    
                            surface: '${surface}',
                            onSurface: '${onSurface}',
                    
                            primary: '${primary}',
                            onPrimary: '${onPrimary}',
                    
                            secondary: '${secondary}',
                            onSecondary: '${onSecondary}',
                    
                            error: '${error}',
                            onError: '${onError}',
                    
                            warning: '${warning}',
                            onWarning: '${onWarning}',
                    
                            notice: '${notice}',
                            onNotice: '${onNotice}',
                        }
                    }}>
                        {/* ... */}
                    </ThemeProvider>
                `}</CodeBlock>

                <style>{`
                    :root {
                        --color-link: ${link};
                        --color-link--hover: ${linkHover};
            
                        --color-background: ${background};
                        --color-on-background: ${onBackground};
            
                        --color-surface: ${surface};
                        --color-on-surface: ${onSurface};
            
                        --color-primary: ${primary};
                        --color-on-primary: ${onPrimary};
            
                        --color-secondary: ${secondary};
                        --color-on-secondary:${onSecondary};
                    
                        --color-error: ${error};
                        --color-on-error: ${onError};
            
                        --color-warning: ${warning};
                        --color-on-warning: ${onWarning};
            
                        --color-notice: ${notice};
                        --color-on-notice: ${onNotice};
                    }
                `}</style>

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
        )
    })
