import styled from 'styled-components'

export const Root = styled.div`
    display: row;
    flex-direction: row;
    width: 100%;

    @media ${props => props.theme.breakpoints.untilMedium} {
        flex-direction: column;
    }
`
