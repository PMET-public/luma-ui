import { useContext, createContext } from 'react'
import { theme } from './theme'

export const ThemeContext = createContext({
    colors: theme.colors,
    typography: theme.typography,
    isDark: false,
    setDark: (v: boolean) => { },    
})

export const useTheme = () => useContext(ThemeContext)
