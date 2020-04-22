import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
        v2.0 | 20110126
        License: none (public domain)
    */

    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
    }

    /* HTML5 display-role reset for older browsers */

    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
        display: block;
    }


    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after, q:before, q:after {
        content: "";
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    button {
        background: none;
        border: 0;
        padding: 0;
    }

    /* Forms
    ========================================================================== */

    /**
    * 1. Change the font styles in all browsers.
    * 2. Remove the margin in Firefox and Safari.
    */

    button, input, optgroup, select, textarea {
        font-family: inherit;
        /* 1 */
        font-size: 100%;
        /* 1 */
        line-height: inherit;
        /* 1 */
        margin: 0;
        /* 2 */
        color: inherit;
    }

    /**
    * Show the overflow in IE.
    * 1. Show the overflow in Edge.
    */

    button, input {
        /* 1 */
        overflow: visible;
    }

    /**
    * Remove the inheritance of text transform in Edge, Firefox, and IE.
    * 1. Remove the inheritance of text transform in Firefox.
    */

    button, select {
        /* 1 */
        text-transform: none;
    }

    /**
    * Correct the inability to style clickable types in iOS and Safari.
    */

    button, [type="button"], [type="reset"], [type="submit"] {
        -webkit-appearance: none;
    }

    a {
        color: unset;
        text-decoration: none;
    }

    html {
        font-size: 62.5%;
        /* ~10px = 1rem! */
    }

    body {
        font-size: 16px;
        /* px fallback */
        font-size: 1.6rem;
        /* default font-size for document */

        line-height: 1;

        -webkit-font-smoothing: antialiased;
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.onBackground};
        font-family: ${props => props.theme.typography.body.family};
        font-style: ${props => props.theme.typography.body.style};
        font-weight: ${props => props.theme.typography.body.weight.normal};
    }

    /** MISC */
    .visuallyhidden {
        clip: rect(0 0 0 0);
        height: 1px;
        width: 1px;
        margin: -1px;
        padding: 0;
        border: 0;
        overflow: hidden;
        position: absolute;
    }

    a[href],
    button {
        &:not([disabled]) {
            cursor: pointer;
        }
    }

    *:focus {
        outline: 0;
    }

    .focus-visible:focus {
        outline-style: solid;
        outline-color: ${props => props.theme.colors.accent};
        outline-width: 0.1rem;
        outline-offset: 0.3rem;
    }

    .js-focus-visible :focus:not(.focus-visible) {
        outline: 0;
    }

    code {
        font-family: 'Fira Code', 'Courier New', Courier, monospace;
    }

    .breakpoint-smallOnly-hidden {
        @media ${props => props.theme.breakpoints.smallOnly} {
            display: none;
        }
    }
    .breakpoint-medium-hidden {
        @media ${props => props.theme.breakpoints.medium} {
            display: none;
        }
    }

    .breakpoint-mediumOnly-hidden {
        @media ${props => props.theme.breakpoints.mediumOnly} {
            display: none;
        }
    }

    .breakpoint-untilMedium-hidden {
        @media ${props => props.theme.breakpoints.untilMedium} {
            display: none;
        }
    }

    .breakpoint-large-hidden {
        @media ${props => props.theme.breakpoints.large} {
            display: none;
        }
    }

    .breakpoint-largeOnly-hidden {
        @media ${props => props.theme.breakpoints.largeOnly} {
            display: none;
        }
    }

    .breakpoint-untilLarge-hidden {
        @media ${props => props.theme.breakpoints.untilLarge} {
            display: none;
        }
    }

    .breakpoint-xLarge-hidden {
        @media ${props => props.theme.breakpoints.xLarge} {
            display: none;
        }
    }
`
