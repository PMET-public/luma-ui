import styled from 'styled-components'
import { ContentWithBackgroundProps } from '../../lib/ContentWithBackground'

export const Root = styled.div<ContentWithBackgroundProps>`
    @media ${props => props.theme.breakpoints.untilMedium} {
        width: 100% !important;

        &[style] {
            margin-left: 0 !important;
            margin-right: 0 !important;
            margin-bottom: 0 !important;
        }

        &[style]:not(:first-child) {
            margin-top: ${props => props.theme.layout.margin} !important;
        }
    }
`
