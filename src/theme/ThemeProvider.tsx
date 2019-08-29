import React, { FunctionComponent } from 'react'
import styled, { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components'
import { ResetStyles } from './ResetStyles'
import { light, dark } from './colors'
import { typography } from './typography'
import { breakpoints } from './breakpoints'

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
    margin: 0 auto;
    max-width: 180rem;

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

    & blockquote {
        font-size: 2.4rem;
        font-style: italic;
        line-height: 1.5;
        margin-bottom: 1rem;
        margin-top: 1rem;
        padding-left: 2.4rem;
        position: relative;
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

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ dark: isDark, children }) => {
    const colors = isDark ? dark : light

    return (
        <StyledThemeProvider theme={{ colors, typography, breakpoints, isDark }}>
            <Root>
                <ResetStyles />
                <GlobalStyles />
                {children}
            </Root>
        </StyledThemeProvider>
    )
}
