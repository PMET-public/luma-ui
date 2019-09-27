import styled from 'styled-components'

import { Wrapper as ContainerWrapper } from '../Container'

export const Root = styled.div`
    width: 100%;

    & h1,
    & h2,
    & h3,
    & h4,
    & p {
        &:not(:last-child) {
            margin-bottom: 1rem;
        }
    }

    & h1,
    & h2,
    & h3,
    & h4 {
        font-family: ${props => props.theme.typography.heading.family};
        font-weight: normal;
        font-size: 1.8rem;
    }

    & h1 {
        font-size: 2.6rem;

        @media ${props => props.theme.breakpoints.medium} {
            font-size: 4rem;
        }
    }

    & h2 {
        font-size: 2rem;
    }

    & p {
        margin-bottom: 1rem;
    }

    & ol,
    & ul {
        list-style-position: inside;
        margin-left: 1rem;
    }

    & ul {
        list-style-position: inside;
    }

    & ol {
        list-style-type: decimal;
    }

    & strong {
        font-weight: 600;
    }

    & em {
        font-style: italic;
    }

    code {
        background: ${props => props.theme.colors.onSurface};
        color: ${props => props.theme.colors.surface};
        display: block;
        padding: 2rem;
    }

    ${ContainerWrapper} {
        & {
            margin: unset;
            max-width: unset;
            padding: unset;
        }
    }
`

export const RichText = styled.div``
