import styled from 'styled-components'

import { Root as RootButton } from '../ButtonItem'
import { Root as RootButtonComponent } from '../../../Button'

export const Root = styled.div<{ $appearance: 'inline' | 'stacked'; $sameWidth: boolean }>`
    display: inline-flex;
    align-items: center;

    ${props =>
        props.$appearance === 'stacked' &&
        `
            flex-direction: column;
            align-items: unset;
        `}

    ${RootButton} {
        &:not(:first-child) {
            ${props => (props.$appearance === 'inline' ? `margin-left: 1rem;` : `margin-top: 1rem;`)}
        }

        flex-grow: ${props => (props.$sameWidth ? '1' : '0')};
    }

    ${RootButtonComponent} {
        width: ${props => (props.$sameWidth ? '100%' : 'auto')};
    }
`
