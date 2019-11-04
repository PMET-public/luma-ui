import styled from 'styled-components'

export const Root = styled.form`
    display: grid;
    grid-row-gap: 1rem;
    grid-column-gap: 3rem;
`

export const Field = styled.div`
    display: grid;
    grid-gap: 1rem;
`

export const Label = styled.label<{ $error?: boolean }>`
    font-size: 1.3rem;
    font-weight: 600;
    pointer-events: none;
    color: ${props => (props.$error ? props.theme.colors.onError : props.theme.colors.onSurface)};
`

export const Error = styled.span`
    color: ${props => props.theme.colors.onError};
    min-height: 1em;
    font-size: 90%;
`
export const Input = styled.input<{ $error?: boolean }>`
    appearance: none;
    border-radius: 0;
    padding: 0.6rem 0;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 0.1rem solid ${props => props.theme.colors.primary10};
    transition: border 250ms ease, background-color 250ms ease;
    background-color: ${props => props.theme.colors.surface};

    &::placeholder {
        color: ${props => props.theme.colors.primary75};
    }

    &:focus {
        outline: none;
        border-bottom-color: ${props => props.theme.colors.accent50};
        background-color: ${props => props.theme.colors.accent5};
    }

    ${props =>
        props.$error &&
        `
            border-bottom-color: ${props.theme.colors.onError};
        `}
`
