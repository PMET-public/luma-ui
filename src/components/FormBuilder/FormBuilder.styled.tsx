import styled from 'styled-components'

export const Root = styled.div`
    display: grid;
    grid-gap: 1rem;
`

export const Title = styled.div`
    font-size: 2rem;
    font-family: ${props => props.theme.typography.heading.family};
    font-weight: 400;
`
