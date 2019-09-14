import styled from 'styled-components'

export const Root = styled.div`
    line-height: 1.5;

    & h1,
    & h2,
    & h3,
    & h4,
    & h5,
    & h6 {
        margin-bottom: 1.4rem;
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
`
