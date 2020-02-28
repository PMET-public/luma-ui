import styled from 'styled-components'

export const Root = styled.div`
    -webkit-font-smoothing: antialiased;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.onBackground};
    font-family: ${props => props.theme.typography.body.family};
    font-style: ${props => props.theme.typography.body.style};
    font-weight: ${props => props.theme.typography.body.weight.normal};

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

    & .breakpoint-smallOnly-hidden {
        @media ${props => props.theme.breakpoints.smallOnly} {
            display: none;
        }
    }
    & .breakpoint-medium-hidden {
        @media ${props => props.theme.breakpoints.medium} {
            display: none;
        }
    }

    & .breakpoint-mediumOnly-hidden {
        @media ${props => props.theme.breakpoints.mediumOnly} {
            display: none;
        }
    }

    & .breakpoint-untilMedium-hidden {
        @media ${props => props.theme.breakpoints.untilMedium} {
            display: none;
        }
    }

    & .breakpoint-large-hidden {
        @media ${props => props.theme.breakpoints.large} {
            display: none;
        }
    }

    & .breakpoint-largeOnly-hidden {
        @media ${props => props.theme.breakpoints.largeOnly} {
            display: none;
        }
    }

    & .breakpoint-untilLarge-hidden {
        @media ${props => props.theme.breakpoints.untilLarge} {
            display: none;
        }
    }

    & .breakpoint-xLarge-hidden {
        @media ${props => props.theme.breakpoints.xLarge} {
            display: none;
        }
    }
`
