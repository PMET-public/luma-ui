import styled from 'styled-components'

export const Root = styled.div`
    font-family: ${props => props.theme.typography.heading};
    font-size: 3rem;

    @media ${props => props.theme.breakpoints.medium} {
        font-size: 4rem;
    }
`
