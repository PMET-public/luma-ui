import styled from 'styled-components'

export const Root = styled.div`
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
        font-size: 3rem;
        font-family: ${props => props.theme.typography.heading.family};
        font-weight: ${props => props.theme.typography.heading.weight};

        @media ${props => props.theme.breakpoints.medium} {
            font-size: 4rem;
        }
    }
`
