import React from 'react'
import { storiesOf } from '@storybook/react'
import CodeBlock from '../../.storybook/components/CodeBlock'

storiesOf('🖼 Theme', module)
    .add('⚛️ ThemeProvider', () => (
        <div className="story">

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
                        bodyFamily?: FontFamilyProperty
                        bodyStyle?: FontStyleProperty
                        bodyWeight?: FontWeightProperty
                    
                        headingFamily?: FontFamilyProperty
                        headingStyle?: FontStyleProperty
                        headingWeight?: FontWeightProperty
                    }

                }    

                type Color = [string, string?] //  ⃪ [☀️ mode, 🌑 mode]

                // i.e. primary: ['hsla(0, 0%, 6.7%, 1)', 'hsla(200, 17.9%, 26.3%, 1)']

            `}</CodeBlock>

            <style jsx global>{`
                .story {
                    padding: 2rem;
                }
            `}</style>

        </div>
    ))
