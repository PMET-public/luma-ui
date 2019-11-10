import styled from 'styled-components'

export const Root = styled.div`
    font-family: ${props => props.theme.typography.heading.family};
    font-size: ${props => props.theme.typography.heading.size.primary};
    font-weight: ${props => props.theme.typography.heading.weight.normal};
    color: ${props => props.theme.colors.onSurface75};
    padding: 3rem 0;
`
