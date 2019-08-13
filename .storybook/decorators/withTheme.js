import React from 'react'
import ThemeProvider from '../../src/theme'

export const withTheme = (story) => (
    <ThemeProvider>
        {story()}
    </ThemeProvider>
)
