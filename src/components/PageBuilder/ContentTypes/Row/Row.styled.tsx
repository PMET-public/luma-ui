import styled from 'styled-components'

export const Wrapper = styled.div``

export const Root = styled.div<{ $appearance?: 'contained' | 'full-width' | 'full-bleed' }>`
    margin: 0 auto;
    max-width: ${props => (props.$appearance === 'contained' ? props.theme.layout.containedWidth : '100%')};
    position: relative;
    width: 100%;

    ${Wrapper} {
        margin: 0 auto;
        width: 100%;
        padding: 0 ${props => (props.$appearance === 'contained' ? props.theme.layout.margin : '0')};
        max-width: ${props => (props.$appearance === 'full-width' ? props.theme.layout.containedWidth : '100%')};
    }
`
