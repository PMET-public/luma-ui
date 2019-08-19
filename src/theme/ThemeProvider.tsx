import React, { FunctionComponent, useState, createContext } from 'react'
import StyleContext from 'isomorphic-style-loader/StyleContext'
import { classNames } from '../lib'
import './reset.css'
import styles from './ThemeProvider.css'

import useStyles from 'isomorphic-style-loader/useStyles'

const insertCss = (..._styles: any[]) => {
    const removeCss = _styles.map(style => style._insertCss())
    return () => removeCss.forEach(dispose => dispose())
}

const ThemeContext = createContext({
    dark: false,
    setDark: (v: boolean) => { },
})

const Theme: FunctionComponent<{
    dark?: boolean
}> = ({
    dark,
    children,
    ...props
}) => {
    useStyles(styles)

    return (
        <div
            {...props}
            className={classNames(styles.theme, [styles.dark, dark])}
        >
            {children}
        </div>
    )
}

export const ThemeProvider: FunctionComponent = ({
    children,
    ...props
}) => {
    const [dark, setDark] = useState(false) // window.matchMedia("(prefers-color-scheme: dark)").matches || false

    return (
        <StyleContext.Provider value={{ insertCss }}>
            <ThemeContext.Provider value={{ dark, setDark }}>
                <Theme dark={dark} {...props}>
                    {children}
                </Theme>
            </ThemeContext.Provider>
        </StyleContext.Provider>
    )
}
