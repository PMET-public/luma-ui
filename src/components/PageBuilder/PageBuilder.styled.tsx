import styled from 'styled-components'

export const Root = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-auto-columns: minmax(0, 1fr);
    grid-auto-rows: minmax(max-content, max-content);
    width: 100%;

    @media ${props => props.theme.breakpoints.medium} {
        grid-gap: 4rem;
    }
`
