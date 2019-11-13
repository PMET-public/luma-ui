import styled from 'styled-components'

export const Root = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    & h1,
    & h2,
    & h3,
    & h4,
    & h5,
    & h6 & p {
        &:not(:first-child) {
            margin-top: 1rem;
        }
        &:not(:last-child) {
            margin-bottom: 1rem;
        }
    }

    & h1,
    & h2,
    & h3,
    & h4,
    & h5,
    & h6 {
        font-family: ${props => props.theme.typography.heading.family};
        word-break: break-word;
    }

    & h1 {
        font-size: 4rem;
        font-weight: ${props => props.theme.typography.heading.weight.bolder};
    }

    & h2 {
        font-size: 3rem;
        font-weight: ${props => props.theme.typography.heading.weight.semi};
    }

    & h3 {
        font-size: 2.6rem;
        font-weight: ${props => props.theme.typography.heading.weight.bold};
    }

    & h4 {
        font-size: 2.4rem;
        font-weight: ${props => props.theme.typography.heading.weight.bold};
    }

    & h5 {
        font-size: 2rem;
        font-weight: ${props => props.theme.typography.heading.weight.bold};
    }

    & h6 {
        font-size: 1.8rem;
        font-weight: ${props => props.theme.typography.heading.weight.bold};
    }

    & ol,
    & ul {
        list-style-position: inside;
        margin-block-start: 0.2em;
    }

    & ul {
        list-style-type: dist;
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

    & blockquote {
        font-size: 1.4rem;
        line-height: 1.4;
        margin: 1rem 0;
        font-weight: 300;
        font-style: italic;
    }

    & table {
        width: 100%;
        margin: 1rem 0;
        border-spacing: 0;
        /* border-left: 0.1rem solid ${props => props.theme.colors.onSurface25};
        border-top: 0.1rem solid ${props => props.theme.colors.onSurface25}; */
    }

    & table td,
    & table th {
        text-align: left;
        padding: 2rem;
        font-size: 1.6rem;
        line-height: 1.4;
        /* border-right: 0.1rem solid ${props => props.theme.colors.onSurface25};
        border-bottom: 0.1rem solid ${props => props.theme.colors.onSurface25}; */
    }

    & table th {
        background-color: ${props => props.theme.colors.onSurface25};
    }

    & code {
        background: ${props => props.theme.colors.onSurface};
        color: ${props => props.theme.colors.surface};
        display: block;
        padding: 2rem;
    }
`

export const RichText = styled(Root)``
