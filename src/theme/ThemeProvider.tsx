import React, { FunctionComponent, useState } from 'react'
import styled, { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components'
import { ResetStyles } from './ResetStyles'
import { light as lightColors, dark as darkColors } from './colors'
import { typography } from './typography'
import { breakpoints, layout } from './layout'

const GlobalStyles = createGlobalStyle`
    html {
        font-size: 62.5%; /* ~10px = 1rem! */
    }

    body {
        font-size: 16px; /* px fallback */
        font-size: 1.6rem; /* default font-size for document */
    }
`

export const Root = styled.div`
    -webkit-font-smoothing: antialiased;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.onBackground};
    font-family: ${props => props.theme.typography.body.family};
    font-style: ${props => props.theme.typography.body.style};
    font-weight: ${props => props.theme.typography.body.weight};

    & .visuallyhidden {
        clip: rect(0 0 0 0);
        height: 1px;
        width: 1px;
        margin: -1px;
        padding: 0;
        border: 0;
        overflow: hidden;
        position: absolute;
    }

    & a[href],
    & button {
        &:not([disabled]) {
            cursor: pointer;
        }

        &[disabled] {
            color: inherit;
        }
    }

    & *:focus {
        outline: none;
    }

    /*
        & *:focus {
            outline-style: solid;
            outline-color: currentColor;
            outline-width: 0.1rem;
            outline-offset: 0.1rem;
        }
        */

    code {
        font-family: 'Fira Code', 'Courier New', Courier, monospace;
    }
`

export type ThemeProviderProps = {
    dark?: boolean
}

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ dark: _dark = false, children }) => {
    const [dark, setDark] = useState(_dark)

    const colors = dark ? darkColors : lightColors

    return (
        <StyledThemeProvider theme={{ colors, typography, breakpoints, layout, dark, setDark }}>
            <Root>
                <ResetStyles />
                <GlobalStyles />
                {children}
            </Root>
        </StyledThemeProvider>
    )
}
