import 'styled-components'
import { ThemeColors } from '../src/theme/colors'
import { ThemeTypography } from '../src/theme/typography'
import { Breakpoints } from './../src/theme/breakpoints'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: ThemeColors
        typography: ThemeTypography
        breakpoints: Breakpoints
        isDark?: boolean
    }
}
