import styled from 'styled-components'

export const Root = styled.div`
    display: grid;
    grid-gap: 1rem;
`

export const Title = styled.div`
    font-size: 2rem;
    font-family: ${props => props.theme.typography.heading.family};
    font-weight: 400;
`

export const FieldWrapper = styled.div`
    display: grid;
    grid-gap: 1rem;
`

export const FieldLabel = styled.label<{ $error?: boolean }>`
    font-size: 1.3rem;
    font-weight: 600;
    pointer-events: none;
    color: ${props => (props.$error ? props.theme.colors.onError : props.theme.colors.onSurface)};
`

export const FieldError = styled.span`
    color: ${props => props.theme.colors.onError};
    min-height: 1em;
    font-size: 90%;
`
export const FieldInput = styled.input<{ $error?: boolean }>`
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
