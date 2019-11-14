import styled from 'styled-components'

export const Root = styled.div``

export const Stories = styled.div`
    padding: 1rem 0 2rem;

    @media ${props => props.theme.breakpoints.medium} {
        display: none;
    }
`
