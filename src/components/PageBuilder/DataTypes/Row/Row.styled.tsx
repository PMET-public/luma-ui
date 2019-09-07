import styled from 'styled-components'

import { Content } from '../../lib/ContentWithBackground'

export const Root = styled.div<{ $appearance?: 'contained' | 'full-width' | 'full-bleed' }>`
    margin: 0 auto;
    max-width: ${props => (props.$appearance === 'contained' ? props.theme.layout.containedWidth : '100%')};
    position: relative;
    width: 100%;

    ${Content} {
        padding: 0 ${props => props.theme.layout.margin};
        margin: 0 auto;
        width: 100%;
        max-width: ${props => (props.$appearance === 'full-width' ? props.theme.layout.containedWidth : '100%')};
    }
`
