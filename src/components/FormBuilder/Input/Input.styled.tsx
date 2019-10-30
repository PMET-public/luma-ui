import styled from 'styled-components'
import { FieldWrapper, FieldLabel, FieldError } from '../FormBuilder.styled'

export const Root = FieldWrapper

export const InputField = styled.input<{ $error?: boolean }>`
    padding: 0 0 0.6rem;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 0.1rem solid ${props => props.theme.colors.primary25};
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
            border-bottom-color: ${props.theme.colors.onError};
        `}
`

export const Label = styled(FieldLabel)<{ $active?: boolean; $error?: boolean }>`
    pointer-events: none;
    color: ${props => (props.$error ? props.theme.colors.onError : 'unset')};
    transition: transform 250ms ease;
    transform: translateY(${props => (props.$active ? '0' : 'calc(100% + 0.6em)')});
`

export const Error = FieldError
