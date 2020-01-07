import styled from 'styled-components'

export const Root = styled.div``

export const Stories = styled.div`
    padding: 1.4rem 0;

    @media ${props => props.theme.breakpoints.medium} {
        display: none;
    }
`
