import 'styled-components'
import { ThemeColors } from '../theme/colors'
import { ThemeTypography } from '../theme/typography'
import { ThemeBreakpoints, ThemeLayout } from '../theme/layout'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: ThemeColors
        typography: ThemeTypography
        breakpoints: ThemeBreakpoints
        layout: ThemeLayout
    }
}
