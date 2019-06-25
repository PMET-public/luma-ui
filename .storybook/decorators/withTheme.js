import React from 'react'
import ThemeProvider from '../../src/theme'

export const withTheme = (story, { parameters: { withTheme } }) => (
    <ThemeProvider isDark={withTheme.isDark} colors={withTheme.colors} typography={withTheme.typography}>
        {story()}
    </ThemeProvider>
)
