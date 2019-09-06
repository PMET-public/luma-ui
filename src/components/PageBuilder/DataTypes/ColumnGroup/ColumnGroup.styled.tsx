import styled from 'styled-components'

import { Root as ColumnRoot } from '../Column'

export const Root = styled.div`
    display: flex;
    flex-direction: row;

    @media ${props => props.theme.breakpoints.smallOnly} {
        flex-direction: column;

        ${ColumnRoot} {
            width: 100% !important;
        }
    }
`
