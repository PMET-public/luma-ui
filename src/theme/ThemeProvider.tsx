import React, { FunctionComponent, useState, ReactElement } from 'react'
import { ColorProperty, FontStyleProperty, FontWeightProperty, FontFamilyProperty } from 'csstype'
import { ThemeContext, useTheme } from '../hooks/useTheme'
import ResetStyles from './ResetStyles'
import GlobalStyles from './GlobalStyles'
import TypographyStyles from './TypographyStyles'

type Color = [ColorProperty, ColorProperty] | [ColorProperty] | ColorProperty | undefined

type Colors = {
    link?: Color
    linkHover?: Color

    background?: Color
    onBackground?: Color

    surface?: Color
    onSurface?: Color

    translucentSurface?: Color
    onTranslucentSurface?: Color

    primary?: Color
    onPrimary?: Color

    secondary?: Color
    onSecondary?: Color

    accent?: Color
    onAccent?: Color

    error?: Color
    onError?: Color

    warning?: Color
    onWarning?: Color

    notice?: Color
    onNotice?: Color
}

type Typography = {
    body?: {
        family?: FontFamilyProperty
        style?: FontStyleProperty
        weight?: FontWeightProperty
    }
    headings?: {
        family?: FontFamilyProperty
        style?: FontStyleProperty
        weight?: FontWeightProperty
    }

}

type ThemeProviderProps = {
    colors?: Colors
    typography?: Typography
    padding?: string
    routerLink?: ReactElement
}

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({
    children,
    colors: newColors,
    padding = '2rem',
    routerLink = (props: any) => <a {...props} />,
    typography: newTypography,
    
}) => {
    const [isDark, setDark] = useState(false)
    const { 
        colors: defaultColors,
        typography: defaultTypography,
    } = useTheme()

    const mergedColors = {
        ...defaultColors,
        ...newColors,
    }

    const colors: any = Object.keys(mergedColors)
        .reduce((acc, key) => {
            const color = mergedColors[key]
            return {
                ...acc,
                [key]: color && (
                    typeof color === 'string' ?
                        color :
                        color[(isDark && color.length > 1) ? 1 : 0]
                ),
            }
        }, {})

    const typography: any = {
        ...defaultTypography,
        body: {
            ...defaultTypography && defaultTypography.body,
            ...newTypography && newTypography.body,
        },
        headings: {
            ...defaultTypography && defaultTypography.headings,
            ...newTypography && newTypography.headings,
        },
    }

    const grid = ({ columns = 1, gap = padding, fluid = false, auto = false }) => `
        display: grid;
        grid-gap: ${gap};
        grid-template-columns: ${fluid || auto ? 'unset' : `repeat(${columns}, 1fr)` };
        grid-auto-flow: ${fluid || auto ? 'column' : 'unset' };
        grid-auto-columns: ${fluid ? 'minmax(max-content, max-content)' : auto ? 'column' : 'unset'};
    `

    const breakpoints = {
        medium: 'min-width: 767px',
        large: 'min-width: 767px',
        xlarge: 'min-width: 1200px',
    }

    return (
        <ThemeContext.Provider value={{ 
            breakpoints,
            colors,
            grid,
            isDark, 
            padding,
            routerLink,
            setDark, 
            typography, 
        }}>
            <div className="theme-container">
                {children}
            </div>

            <ResetStyles />
            <GlobalStyles />
            <TypographyStyles />
        </ThemeContext.Provider>
    )
} 
