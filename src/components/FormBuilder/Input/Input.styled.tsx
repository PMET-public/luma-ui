import styled from 'styled-components'

export const Root = styled.div`
    display: grid;
    grid-gap: 0.8rem;
`

export const InputField = styled.input<{ $error?: boolean }>`
    padding: 0 0 0.6rem;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom-color: ${props => props.theme.colors.primary25};
    transition: border 250ms ease;

    &::placeholder {
        color: ${props => props.theme.colors.primary75};
    }

    &:focus {
        outline: none;
        border-bottom-color: ${props => props.theme.colors.primary75};
    }

    ${props =>
        props.$error &&
        `
            border-bottom-color: ${props => props.theme.colors.onError};
        `}
`

export const Label = styled.label<{ $active?: boolean; $error?: boolean }>`
    font-size: 1em;
    font-weight: 600;
    pointer-events: none;
    color: ${props => (props.$error ? props.theme.colors.onError : 'unset')};
    transition: transform 250ms ease;
    transform: translateY(${props => (props.$active ? '0' : 'calc(100% + 0.6em)')});
`

export const Error = styled.span`
    color: ${props => props.theme.colors.onError};
    min-height: 1em;
    font-size: 90%;
`
