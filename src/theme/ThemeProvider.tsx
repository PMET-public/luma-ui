import React, { FunctionComponent } from 'react'
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

    /* Copy & Lists */

    & ul {
        list-style-type: circle;
    }

    & ul li,
    & ol li {
        line-height: 1.5;
    }

    /* Headings */

    & h1,
    & h2,
    & h3,
    & h4,
    & h5,
    & h6 {
        /* Change heading typefaces here */
        font-family: ${props => props.theme.typography.heading.family};
        font-style: ${props => props.theme.typography.heading.style};
        font-weight: ${props => props.theme.typography.heading.weight};
        line-height: 1.1;
    }

    & h1 {
        font-size: 2.4rem;
    }

    & h2 {
        font-size: 2.2rem;
    }

    & h3 {
        font-size: 2rem;
    }

    & h4,
    & h5,
    & h6 {
        font-size: 1.8rem;
    }

    /* Tables */

    & table {
        margin-top: 1rem;
        border-spacing: 0;
        border-collapse: collapse;
    }

    & table td,
    & table th {
        padding: 0;
        line-height: 3.3rem;
    }

    code {
        font-family: 'Fira Code', 'Courier New', Courier, monospace;
    }
`

export type ThemeProviderProps = {
    dark?: boolean
}

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ dark = false, children }) => {
    const colors = dark ? darkColors : lightColors

    return (
        <StyledThemeProvider theme={{ colors, typography, breakpoints, layout, dark }}>
            <Root>
                <ResetStyles />
                <GlobalStyles />
                {children}
            </Root>
        </StyledThemeProvider>
    )
}
