import React from 'react'
import ThemeProvider from '../../src/theme'

export const withTheme = (story, { parameters: { withTheme = {} } }) => (
    <ThemeProvider theme={withTheme}>
        {story()}
    </ThemeProvider>
)
