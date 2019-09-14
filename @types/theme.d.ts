import 'styled-components'
import { ThemeColors } from '../src/theme/colors'
import { ThemeTypography } from '../src/theme/typography'
import { Breakpoints, Layout } from '../src/theme/layout'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: ThemeColors
        typography: ThemeTypography
        breakpoints: Breakpoints
        dark: boolean
        setDark: (s: boolean) => any
        layout: Layout
    }
}
