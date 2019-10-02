import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
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
