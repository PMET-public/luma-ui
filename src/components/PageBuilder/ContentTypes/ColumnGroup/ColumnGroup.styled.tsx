import styled from 'styled-components'

export const Root = styled.div`
    display: row;
    flex-direction: row;
    width: 100%;

    @media ${props => props.theme.breakpoints.smallOnly} {
        flex-direction: column;
    }
`
