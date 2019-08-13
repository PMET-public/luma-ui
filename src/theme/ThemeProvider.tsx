import React, { FunctionComponent, useState, createContext, useContext } from 'react'
import ResetStyles from './ResetStyles'
import GlobalStyles from './GlobalStyles'
import TypographyStyles from './TypographyStyles'
import { theme } from './theme'

const ThemeContext = createContext({
    colors: theme.colors,
    typography: theme.typography,
    isDark: false,
    setDark: (v: boolean) => { },    
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider: FunctionComponent = ({
    children,
}) => {
    const [isDark, setDark] = useState(false) // window.matchMedia("(prefers-color-scheme: dark)").matches || false
    
    const { colors: _colors, typography } = theme

    const colors: any = Object.keys(_colors)
        .reduce((acc, key) => {
            const colorByKey = _colors[key]
            const selectedColor = typeof colorByKey === 'string' ? 
                colorByKey : colorByKey[(isDark && colorByKey.length > 1) ? 1 : 0]            
            return { ...acc, [key]: selectedColor }
        }, {})

    return (
        <ThemeContext.Provider value={{ colors, typography, isDark, setDark }}>
            <div className="theme">
                {children}
            </div>

            <ResetStyles />
            <GlobalStyles  />
            <TypographyStyles />
        </ThemeContext.Provider>
    )
} 
