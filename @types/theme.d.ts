import 'styled-components'
import { ThemeColors } from '../src/theme/colors'
import { ThemeTypography } from '../src/theme/typography'
import { ThemeBreakpoints, ThemeLayout } from '../src/theme/layout'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: ThemeColors
        typography: ThemeTypography
        breakpoints: ThemeBreakpoints
        layout: ThemeLayout
    }
}
