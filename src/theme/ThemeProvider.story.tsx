import React from 'react'
import { storiesOf } from '@storybook/react'
import CodeBlock from '../../.storybook/components/CodeBlock'

storiesOf('🖼 Theme', module).add('⚛️ ThemeProvider', () => (
    <div
        className="story"
        style={{
            padding: '2rem',
        }}
    >
        <h1>⚛️ ThemeProvider</h1>

        <hr />

        <CodeBlock lang="jsx">{`
            import ThemeProvider from 'luma-storybook/dist/theme'

            <ThemeProvider>
                {/* <App /> */}
            </ThemeProvider>
        `}</CodeBlock>
    </div>
))
