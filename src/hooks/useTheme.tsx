import { createContext, useContext } from 'react'

export const ThemeContext = createContext({
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
        baseSize: 16,
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
    isDark: false,
    setDark: (v: boolean) => { },
    padding: '0',
    breakpoints: { medium: '', large: '', xlarge: '' },
    grid: ({ columns = 1, gap = 0, fluid = false, auto = false }) => ``,
    routerLink: ({ ...props }) => <a {...props} />,
})

export const useTheme = () => useContext(ThemeContext)
