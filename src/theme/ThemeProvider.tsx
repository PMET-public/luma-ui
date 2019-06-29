import React, { FunctionComponent, useState, createContext, useContext } from 'react'
import ResetStyles from './ResetStyles'
import GlobalStyles from './GlobalStyles'
import TypographyStyles from './TypographyStyles'
import { ReactComponentLike } from 'prop-types'
import { ColorProperty, FontFamilyProperty, FontStyleProperty, FontWeightProperty } from 'csstype'

type Color = [ColorProperty, ColorProperty?]

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
    bodyFamily?: FontFamilyProperty
    bodyStyle?: FontStyleProperty
    bodyWeight?: FontWeightProperty

    headingFamily?: FontFamilyProperty
    headingStyle?: FontStyleProperty
    headingWeight?: FontWeightProperty
}

type Theme = {
    colors: Colors
    isDark: boolean
    routerLink: ReactComponentLike
    setDark: (v: boolean) => any
    typography: Typography
    grid: (p?: { columns?: number, gap?: string, fluid?: boolean, auto?: boolean , inline?: boolean}) => string
}

type ThemeProviderProps = {
    colors?: Colors
    typography?: Typography
    routerLink?: ReactComponentLike
}

const defaultTheme: Theme = {
    colors: {
        link: ['#263238', '#ECEFF1'],
        linkHover: ['#37474F', '#CFD8DC'],

        background: ['#fff', '#222'],
        onBackground: ['#222', '#fff'],

        surface: ['#fff', '#222'],
        onSurface: ['#222', '#fff'],

        translucentSurface: ['rgba(255, 255, 255, 0.95)', 'rgba(0, 0, 0, 0.95)'],
        onTranslucentSurface: ['#222', '#fff'],

        primary: ['#111', '#fff'],
        onPrimary: ['#fff', '#111'],

        secondary: ['#212121', '#fafafa'],
        onSecondary: ['#fafafa', '#212121'],

        accent: ['#a14a24'],
        onAccent: ['#fafafa'],

        error: ['transparent'],
        onError: ['#ef5350', '#ef5350'],

        warning: ['transparent'],
        onWarning: ['#f57c00', '#ffd54f'],

        notice: ['transparent'],
        onNotice: ['#039be5', '#e1f5fe'],
    },

    typography: {
        bodyFamily: 'sans-serif',
        bodyStyle: 'normal',
        bodyWeight: 400,
        headingFamily: 'serif',
        headingStyle: 'normal',
        headingWeight: 600,
    },
    isDark: false,
    setDark: (v: boolean) => { },
    grid: (props) => ``,
    routerLink: ({ ...props }) => <a {...props} />,
}

const ThemeContext = createContext(defaultTheme)

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({
    children,
    colors: newColors,
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
        ...newTypography,
    }

    const grid = ({ columns = 1, gap = '2rem', fluid = false, auto = false, inline = false }) => `
        display: ${inline ? 'inline-grid' : 'grid'};
        grid-gap: ${gap};
        grid-template-columns: ${fluid || auto ? 'unset' : `repeat(${columns}, 1fr)` };
        grid-auto-flow: ${fluid || auto ? 'column' : 'unset' };
        grid-auto-columns: ${fluid ? 'minmax(max-content, max-content)' : auto ? 'column' : 'unset'};
    `

    return (
        <ThemeContext.Provider value={{ 
            colors,
            grid,
            isDark, 
            routerLink,
            setDark, 
            typography, 
        }}>
            <div className="theme-container">
                {children}
            </div>

            <style jsx global>{`
                .theme-container {
                    max-width: 1800px;
                    margin: 0 auto;
                }
            `}</style>

            <ResetStyles />
            <GlobalStyles colors={colors} />
            <TypographyStyles typography={typography} />
        </ThemeContext.Provider>
    )
} 
