import React, { FunctionComponent, useState, createContext } from 'react'
import { classNames } from '../lib'
import './reset.css'
import styles from './ThemeProvider.css'

const ThemeContext = createContext({
    dark: false,
    setDark: (v: boolean) => { },
})

export const ThemeProvider: FunctionComponent = ({
    children,
    ...props
}) => {
    const [dark, setDark] = useState(false) // window.matchMedia("(prefers-color-scheme: dark)").matches || false

    return (
        <ThemeContext.Provider value={{ dark, setDark }}>
            <div
                {...props}
                className={classNames(styles.theme, [styles.dark, dark])}
            >
                {children}
            </div>
        </ThemeContext.Provider>
    )
} 
