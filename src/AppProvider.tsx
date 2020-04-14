import React, { FunctionComponent } from 'react'
import { ThemeProvider } from 'styled-components'
import { ToastContainer, toast } from 'react-toastify'
import { Root } from './theme/Root.styles'
import { ToastsStyles } from './theme/ToastsStyles'
import { GlobalStyles } from './theme/GlobalStyles'
import { defaultColors, ThemeColors } from './theme/colors'
import { defaultTypography, ThemeTypography } from './theme/typography'
import { defaultBreakpoints, ThemeBreakpoints, defaultLayout, ThemeLayout } from './theme/layout'
import 'focus-visible'

export type AppProviderProps = {
    colors?: ThemeColors
    typography?: ThemeTypography
    breakpoints?: ThemeBreakpoints
    layout?: ThemeLayout
}

export const AppProvider: FunctionComponent<AppProviderProps> = ({
    children,
    colors = defaultColors,
    typography = defaultTypography,
    breakpoints = defaultBreakpoints,
    layout = defaultLayout,
}) => {
    return (
        <ThemeProvider theme={{ colors, typography, breakpoints, layout }}>
            <Root>{children}</Root>
            <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
            <ToastsStyles />
            <GlobalStyles />
        </ThemeProvider>
    )
}
