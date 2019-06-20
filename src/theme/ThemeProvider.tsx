import React, { createContext, FunctionComponent, Reducer, useReducer, useEffect, ReactNode } from 'react'

type Color = [string, string] | [string] | string | undefined

type Colors = {
    link: Color
    linkHover: Color

    background: Color
    onBackground: Color

    surface: Color
    onSurface: Color

    primary: Color
    onPrimary: Color

    secondary: Color
    onSecondary: Color

    accent: Color
    onAccent: Color

    error: Color
    onError: Color

    warning: Color
    onWarning: Color

    notice: Color
    onNotice: Color
}

type FontStyle = 'normal' | 'italic' | 'oblique' | 'initial' | 'inherit'

type FontWeight = 'normal' | 'bold' | 'bolder' | 'lighter' | number | 'initial' | 'inherit'

type Typography = {
    body: {
        family: string
        style: FontStyle
        weight: FontWeight
    }
    headings: {
        family: string
        style: FontStyle
        weight: FontWeight
    }
}

type Grid = {
    columns: number
    columnWidth: number
    width: number
}

type Theme = {
    colors: Colors
    grid: Grid
    typography: Typography
}

type ThemeProviderProps = {
    children: ReactNode
    theme?: Theme
}

const getColor = (color: Color, isDark?: boolean) => {
    return color && (
        typeof color === 'string' ?
            color :
            color[(isDark && color.length > 1) ? 1 : 0]
    )
}

const defaultTheme: Theme = {
    colors: {
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

        accent: ['#a14a24'],
        onAccent: ['#fafafa'],

        error: ['transparent'],
        onError: ['#ef5350', '#ef5350'],

        warning: ['transparent'],
        onWarning: ['#f57c00', '#ffd54f'],

        notice: ['transparent'],
        onNotice: ['#039be5', '#e1f5fe'],
    },

    grid: {
        columns: 12,
        columnWidth: 60,
        width: 960,
    },

    typography: {
        body: {
            family: 'sans-serif',
            style: 'normal',
            weight: 400,
        },
        headings: {
            family: 'serif',
            style: 'normal',
            weight: 600,
        },
    },
}

const reducer: Reducer<Theme, { type: string, payload: any }> = (state, action) => {
    switch (action.type) {
        case 'update':
            return {
                colors: {
                    ...state.colors,
                    ...action.payload.colors,
                },
                grid: {
                    ...state.grid,
                    ...action.payload.grid,
                },
                typography: {
                    body: {
                        ...(state.typography && state.typography.body),
                        ...(action.payload.typography && action.payload.typography.body),
                    },
                    headings: {
                        ...(state.typography && state.typography.headings),
                        ...(action.payload.typography && action.payload.typography.headings),
                    },
                },
            }

        default:
            return state
    }
}

export const ThemeContext = createContext({ theme: defaultTheme, set: ({}) => {} })

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children, theme }) => {

    const [state, dispatch] = useReducer(reducer, defaultTheme)

    const set = (payload: any) => {
        dispatch({ type: 'update', payload })
    }

    useEffect(() => {
        set(theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme: state, set }}>
            <style>{`
                :root {
                    /**
                     * Theme Colors
                     */

                    --color-link: ${getColor(state.colors.link)};
                    --color-link--hover: ${getColor(state.colors.linkHover)};

                    --color-background: ${getColor(state.colors.background)};
                    --color-on-background: ${getColor(state.colors.onBackground)};

                    --color-surface: ${getColor(state.colors.surface)};
                    --color-on-surface: ${getColor(state.colors.onSurface)};

                    --color-primary: ${getColor(state.colors.primary)};
                    --color-on-primary: ${getColor(state.colors.onPrimary)};

                    --color-secondary: ${getColor(state.colors.secondary)};
                    --color-on-secondary:${getColor(state.colors.onSecondary)};
                    
                    --color-accent: ${getColor(state.colors.accent)};
                    --color-on-accent:${getColor(state.colors.onAccent)};
                
                    --color-error: ${getColor(state.colors.error)};
                    --color-on-error: ${getColor(state.colors.onError)};

                    --color-warning: ${getColor(state.colors.warning)};
                    --color-on-warning: ${getColor(state.colors.onWarning)};

                    --color-notice: ${getColor(state.colors.notice)};
                    --color-on-notice: ${getColor(state.colors.onNotice)};

                    /**
                     * Layout
                     */
                    --grid-width: ${state.grid.width};
                    --grid-column-width: ${state.grid.columnWidth};
                    --grid-columns: ${state.grid.columns};

                    /**
                     * Typography
                     */

                    --font-family-body: ${state.typography.body.family};
                    --font-weight-body: ${state.typography.body.weight};
                    --font-style-body: ${state.typography.body.style};

                    --font-family-heading: ${state.typography.headings.family};
                    --font-weight-heading: ${state.typography.headings.weight};
                    --font-style-heading: ${state.typography.headings.style};
                }
            `}</style>

            <div className="theme-container">
                {children}
            </div>
        </ThemeContext.Provider>
    )
} 
