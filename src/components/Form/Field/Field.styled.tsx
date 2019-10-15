import styled from 'styled-components'

export const Root = styled.div`
    display: grid;
    grid-gap: 1.4rem;
`

export const Label = styled.div<{ $error?: boolean }>`
    align-items: center;
    display: grid;
    font-size: 1.6rem;
    font-weight: 600;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    grid-gap: 0.5rem;
    height: 1.2em;
    transition: color 305ms ease;

    ${props =>
        props.$error &&
        `
            color: ${props.theme.colors.onError};
            & > svg {
                fill: currentColor;
                width: 1.4em;
            }
        `};
`
