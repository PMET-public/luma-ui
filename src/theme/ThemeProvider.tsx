import React, { FunctionComponent, useState, createContext, useContext } from 'react'
import color from 'color'
import ResetStyles from './ResetStyles'
import GlobalStyles from './GlobalStyles'
import TypographyStyles from './TypographyStyles'
import { ReactComponentLike } from 'prop-types'
import { ColorProperty, FontFamilyProperty, FontStyleProperty, FontWeightProperty } from 'csstype'

type Color = [ColorProperty, ColorProperty?]

export type Colors = {
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

    accent?: Color
    onAccent?: Color

    error?: Color
    onError?: Color

    warning?: Color
    onWarning?: Color

    notice?: Color
    onNotice?: Color
}

export type Typography = {
    bodyFamily?: FontFamilyProperty
    bodyStyle?: FontStyleProperty
    bodyWeight?: FontWeightProperty

    headingFamily?: FontFamilyProperty
    headingStyle?: FontStyleProperty
    headingWeight?: FontWeightProperty
}

type Theme = {
    colors: Colors,
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
    // hsla() values. pretty please
    colors: {
        link: ['hsla(200, 19.1%, 18.4%, 1)', 'hsla(204, 15.2%, 93.5%, 1)'],
        linkHover: ['hsla(200, 17.9%, 26.3%, 1)', 'hsla(198.5, 15.7%, 83.7%, 1)'],

        background: ['hsla(0, 0%, 100%, 1)', 'hsla(0, 0%, 13.3%, 1)'],
        onBackground: ['hsla(0, 0%, 13.3%, 1)', 'hsla(0, 0%, 100%, 1)'],

        surface: ['hsla(0, 0%, 100%, 1)', 'hsla(0, 0%, 13.3%, 1)'],
        onSurface: ['hsla(0, 0%, 13.3%, 1)', 'hsla(0, 0%, 100%, 1)'],

        primary: ['hsla(0, 0%, 6.7%, 1)', 'hsla(0, 0%, 100%, 1)'],
        onPrimary: ['hsla(0, 0%, 100%, 1)', 'hsla(0, 0%, 6.7%, 1)'],

        secondary: ['hsla(0, 0%, 12.9%, 1)', 'hsla(0, 0%, 98%, 1)'],
        onSecondary: ['hsla(0, 0%, 98%, 1)', 'hsla(0, 0%, 12.9%, 1)'],

        accent: ['hsla(18.2, 63.5%, 38.6%, 1)'],
        onAccent: ['hsla(0, 0%, 98%, 1)'],

        error: ['hsla(0, 0%, 100%, 1)', 'hsla(1.1, 83.2%, 62.5%, 1)'],
        onError: ['hsla(1.1, 83.2%, 62.5%, 1)', 'hsla(0, 0%, 100%, 1)'],

        warning: ['hsla(0, 0%, 100%, 1)', 'hsla(30.4, 100%, 48%, 1)'],
        onWarning: ['hsla(30.4, 100%, 48%, 1)', 'hsla(0, 0%, 100%, 1)'],

        notice: ['hsla(0, 0%, 100%, 1)', 'hsla(199.6, 97.4%, 45.5%, 1)'],
        onNotice: ['hsla(199.6, 97.4%, 45.5%, 1)', 'hsla(0, 0%, 100%, 1)'],
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
    grid: (props: any) => ``,
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
            const colorsByKey = mergedColors[key]
            // https://github.com/Qix-/color
            return {
                ...acc,
                [key]: color(colorsByKey && (
                    typeof colorsByKey === 'string' ?
                        colorsByKey :
                        colorsByKey[(isDark && colorsByKey.length > 1) ? 1 : 0]
                )),
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
                    padding: 0 1rem;
                }
            `}</style>

            <ResetStyles />
            <GlobalStyles colors={colors} />
            <TypographyStyles typography={typography} />
        </ThemeContext.Provider>
    )
} 
