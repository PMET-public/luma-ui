import styled from 'styled-components'

export const Root = styled.div``

export const Wrapper = styled.div<{ $contained?: boolean; $fullScreen?: boolean; $margin?: boolean }>`
    width: 100%;
    margin: 0 auto;
    padding: 0 ${props => (props.$margin ? props.theme.layout.margin : '0')};
    max-width: ${props => (props.$contained ? props.theme.layout.containedWidth : '100%')};
`
