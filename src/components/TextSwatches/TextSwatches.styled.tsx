import styled from 'styled-components'

export const Root = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
`

export const Item = styled.div<{ active?: boolean; disabled: boolean }>`
    background-color: ${props => props.theme.colors.onPrimary};
    border-radius: 0.5rem;
    border: 0.1rem solid ${props => props.theme.colors.primary25};
    color: ${props => props.theme.colors.primary};
    padding: 1rem;
    text-align: center;
    transition: all 305ms ease;

    ${props =>
        props.active &&
        `
            background-color: ${props.theme.colors.primary};
            color: ${props.theme.colors.onPrimary};
            font-weight: 600;
        `}

    ${props =>
        props.disabled &&
        `
            filter: opacity(30%);
        `}

    &:hover:not([disabled]) {
        border-color: ${props => props.theme.colors.primary75};
    }
`

export const Label = styled.span``
