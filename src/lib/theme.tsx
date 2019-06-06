import React, { createContext, FunctionComponent, Context } from 'react'

import '../styles/reset.less'
import '../styles/colors/colors.less'
import '../styles/layout/layout.less'
import '../styles/typography/typography.less'

type Color = [string, string] | [string] | string | undefined

type Colors = {
    link?: Color
    linkHover?: Color

    background?: Color
    onBackground?: Color

    surface?: Color
    onSurface?: Color

    primary?: Color
    onPrimary?: Color

    secondary?: Color
    onSecondary?: Color

    error?: Color
    onError?: Color

    warning?: Color
    onWarning?: Color

    notice?: Color
    onNotice?: Color
}

type FontStyle = 'normal' | 'italic' | 'oblique' | 'initial' | 'inherit'

type FontWeight = 'normal' | 'bold' | 'bolder' | 'lighter' | number | 'initial' | 'inherit'

type Typography = {
    body: {
        family?: string
        style?: FontStyle
        weight?: FontWeight
    }
    headings: {
        family?: string
        style?: FontStyle
        weight?: FontWeight
    }
}

type Grid = {
    columns?: number
    columnWidth?: number
    width?: number
}

type Theme = {
    colors?: Colors
    grid?: Grid
    typography?: Typography
}

type ThemeProviderProps = {
    theme?: Theme
}

const getColor = (color: Color, isDark?: boolean) => {
    return color && (
        typeof color === 'string' ?
            color :
            color[(isDark && color.length > 1) ? 1 : 0]
    )
}

export const ThemeContext: Context<{ theme: Theme }> = createContext({ theme: {} })

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ theme, children }) => {

    const colors: Colors = {
        link: ['#263238', '#ECEFF1'],
        linkHover: ['#37474F', '#CFD8DC'],

        background: ['#fff', '#222'],
        onBackground: ['#222', '#fff'],

        surface: ['#fff', '#222'],
        onSurface: ['#222', '#fff'],

        primary: ['#111', '#fff'],
        onPrimary: ['#fff', '#111'],

        secondary: ['#212121', '#fafafa'],
        onSecondary: ['#fafafa', '#212121'],

        error: ['#fff', '#222'],
        onError: ['#ef5350', '#ef5350'],

        warning: ['#fff', '#222'],
        onWarning: ['#f57c00', '#ffd54f'],

        notice: ['#fff', '#222'],
        onNotice: ['#039be5', '#e1f5fe'],

        ...(theme && theme.colors),
    }

    const grid: Grid = {
        columns: 12,
        columnWidth: 60,
        width: 960,

        ...(theme && theme.grid),
    }

    const typography: Typography = {
        body: {
            family: 'sans-serif',
            style: 'normal',
            weight: 400,

            ...(theme && theme.typography &&  theme.typography.body),
        },
        headings: {
            family: 'serif',
            style: 'normal',
            weight: 600,

            ...(theme && theme.typography && theme.typography.headings),
        },
    }

    const styles = `
        :root {
            /**
             * Theme Colors
             */

            --color-link: ${getColor(colors.link)};
            --color-link--hover: ${getColor(colors.linkHover)};

            --color-background: ${getColor(colors.background)};
            --color-on-background: ${getColor(colors.onBackground)};

            --color-surface: ${getColor(colors.surface)};
            --color-on-surface: ${getColor(colors.onSurface)};

            --color-primary: ${getColor(colors.primary)};
            --color-on-primary: ${getColor(colors.onPrimary)};

            --color-secondary: ${getColor(colors.secondary)};
            --color-on-secondary:${getColor(colors.onSecondary)};
        
            --color-error: ${getColor(colors.error)};
            --color-on-error: ${getColor(colors.onError)};

            --color-warning: ${getColor(colors.warning)};
            --color-on-warning: ${getColor(colors.onWarning)};

            --color-notice: ${getColor(colors.notice)};
            --color-on-notice: ${getColor(colors.onNotice)};

            /**
             * Layout
             */
            --grid-width: ${grid.width};
            --grid-column-width: ${grid.columnWidth};
            --grid-columns: ${grid.columns};

            /**
             * Typography
             */

            --font-family-body: ${typography.body.family};
            --font-weight-body: ${typography.body.weight};
            --font-style-body: ${typography.body.style};

            --font-family-heading: ${typography.headings.family};
            --font-weight-heading: ${typography.headings.weight};
            --font-style-heading: ${typography.headings.style};
        }
    `

    return (
        <ThemeContext.Provider value={{ theme: { colors, grid, typography } }}>
            <style dangerouslySetInnerHTML={{ __html: styles }}></style>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
