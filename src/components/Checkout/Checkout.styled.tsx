import styled from 'styled-components'

export const Root = styled.div``

export const Title = styled.div`
    font-family: ${props => props.theme.typography.heading.family};
    font-weight: ${props => props.theme.typography.heading.weight};
    font-size: 2rem;
`
