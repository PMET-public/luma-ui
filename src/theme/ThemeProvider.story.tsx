import React from 'react'
import { storiesOf } from '@storybook/react'
import CodeBlock from '../utilities/CodeBlock'

storiesOf('🖼 Theme', module)
    .add('⚛️ ThemeProvider', () => (
        <React.Fragment>
            <CodeBlock lang="jsx">{`
                import ThemeProvider from 'luma-storybook/dist/theme'

                <ThemeProvider theme={{
                    colors: {
                        link: '#263238',
                        linkHover: '#37474F',
                
                        background: '#fff',
                        onBackground: '#222',
                
                        surface: '#fff',
                        onSurface: '#222',
                
                        primary: '#111',
                        onPrimary: '#fff',
                
                        secondary: '#212121',
                        onSecondary: '#fafafa',
                
                        accent: '#a14a24',
                        onAccent: '#fafafa',
                
                        error: 'transparent',
                        onError: '#ef5350',
                
                        warning: 'transparent',
                        onWarning: '#f57c00',
                
                        notice: 'transparent',
                        onNotice: '#039be5',
                    },
                    grid: {
                        columns: 960,
                        columnWidth: 60,
                        width: 12,
                    },
                    typography: {
                        body: {
                            family: 'source-sans pro, sans-serif',
                            style: 'normal',
                            weight: 400,     
                        },
                        headings: {
                            family: 'rucksack, sans-serif',
                            style: 'normal',
                            weight: 600,            
                        },
                    }
                }}>
                    {/* <App /> */}
                </ThemeProvider>
            `}</CodeBlock>
        </React.Fragment>
    ))
    // .add('html', () => (
    //     <React.Fragment>
    //         <CodeBlock lang="css">{`
    //              :root {
    //                 /**
    //                  * Theme Colors
    //                  */
        
    //                 --color-link: #263238;
    //                 --color-link--hover: #37474F;
        
    //                 --color-background: #fff;
    //                 --color-on-background: #222#;
        
    //                 --color-surface: #fff;
    //                 --color-on-surface: #222;
        
    //                 --color-primary: #111;
    //                 --color-on-primary: #fff;
        
    //                 --color-secondary: #212121;
    //                 --color-on-secondary: #fafafa;
                    
    //                 --color-accent: #a14a24;
    //                 --color-on-accent: #fafafa;
                
    //                 --color-error: transparent;
    //                 --color-on-error: #ef5350;
        
    //                 --color-warning: transparent;
    //                 --color-on-warning: #f57c00;
        
    //                 --color-notice: transparent;
    //                 --color-on-notice: #039be5;
        
    //                 /**
    //                  * Layout
    //                  */
    //                 --grid-column-width: 60;
    //                 --grid-columns: 12;
    //                 --grid-width: 960;
        
    //                 /**
    //                  * Typography
    //                  */
        
    //                 --font-family-body: source-sans pro, sans-serif;
    //                 --font-style-body: normal;
    //                 --font-weight-body: 400;
        
    //                 --font-family-heading: rucksack, sans-serif;
    //                 --font-style-heading: normal;
    //                 --font-weight-heading: 600;
    //             }
    //         `}</CodeBlock>
            
    //         <hr/>

    //         <CodeBlock lang="html">{`
    //             <div class="theme-container">
    //                 ...
    //             </div>
    //         `}</CodeBlock>
    //     </React.Fragment>
    // ))
