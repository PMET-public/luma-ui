import styled from 'styled-components'

export const Root = styled.div`
    &&& {
        font-family: ${props => props.theme.typography.heading.family};
        font-weight: ${props => props.theme.typography.heading.weight.semi};
        font-size: ${props => props.theme.typography.heading.size.secondary};
        line-height: 1.25;
        word-break: break-word;
    }
`
