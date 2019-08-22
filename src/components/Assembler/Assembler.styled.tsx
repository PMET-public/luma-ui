import styled from 'styled-components'

export const Root = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-auto-columns: minmax(0, 1fr);
    grid-auto-rows: minmax(max-content, max-content);

    @media ${props => props.theme.breakpoints.medium} {
        grid-gap: 4rem;
    }
`

export const Row = styled.div<{ $hideOnBreakpoint?: string }>`
    &:first-of-type {
        margin-top: 2rem;
    }

    ${props =>
        props.$hideOnBreakpoint &&
        `
        @media ${props.theme.breakpoints[props.$hideOnBreakpoint]} {
            display: none;
        }
    `}
`
