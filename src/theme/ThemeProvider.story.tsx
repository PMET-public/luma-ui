import React from 'react'
import { storiesOf } from '@storybook/react'
import CodeBlock from '../../.storybook/components/CodeBlock'

storiesOf('🖼 Theme', module)
    .add('⚛️ ThemeProvider', () => (
        <div className="story--padded">

            <h1>⚛️ ThemeProvider</h1>

            <hr />

            <CodeBlock lang="jsx">{`
                import ThemeProvider from 'luma-storybook/dist/theme'

                <ThemeProvider>
                    {/* <App /> */}
                </ThemeProvider>
            `}</CodeBlock>

            <hr/>

            <CodeBlock lang="typescript">{`
                type ThemeProviderProps = {
                    colors?: {
                        link?: Color
                        linkHover?: Color
                    
                        background?: Color
                        onBackground?: Color
                    
                        surface?: Color
                        onSurface?: Color
                    
                        translucentSurface?: Color
                        onTranslucentSurface?: Color
                    
                        primary?: Color
                        onPrimary?: Color
                    
                        secondary?: Color
                        onSecondary?: Color
                    
                        accent?: Color
                        onAccent?: Color
                    
                        error?: Color
                        onError?: Color
                    
                        warning?: Color
                        onWarning?: Color
                    
                        notice?: Color
                        onNotice?: Color
                    }
                    
                    typography?: {
                        body?: {
                            family?: string
                            style?: string
                            weight?: number
                        }
                        headings?: {
                            family?: string
                            style?: string
                            weight?: number
                        }
                    }
                    padding?: string
                }    

                type Color = [string, string] | [string] | string //  ⃪ [light mode, dark mode] | [one mode]
            `}</CodeBlock>

        </div>
    ))
