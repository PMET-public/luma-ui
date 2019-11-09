import styled from 'styled-components'

export const Root = styled.div`
    display: grid;
    grid-gap: 1rem;
`
export const BlockQuote = styled.blockquote`
    font-style: italic;
    font-family: ${props => props.theme.typography.heading.family};
    font-size: ${props => props.theme.typography.heading.size.secondary};
    padding: 2rem 0;

    &::before {
        content: '"';
        font-family: ${props => props.theme.typography.body.family};
        font-size: 150%;
        margin-right: 0.5rem;
    }
`

export const Author = styled.span`
    color: ${props => props.theme.colors.onSurface75};
    font-size: 1.6rem;
`

export const Description = styled.span`
    color: ${props => props.theme.colors.onSurface50};
    font-size: 1.4rem;
`
