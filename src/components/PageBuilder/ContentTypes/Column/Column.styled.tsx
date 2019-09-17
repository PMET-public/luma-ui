import styled from 'styled-components'
import { ContentWithBackgroundProps } from '../../lib/ContentWithBackground'

export const Root = styled.div<ContentWithBackgroundProps>`
    @media ${props => props.theme.breakpoints.smallOnly} {
        width: 100% !important;

        &[style] {
            margin-left: 0 !important;
            margin-right: 0 !important;
        }
    }
`
