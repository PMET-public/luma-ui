import styled from 'styled-components'
import { FieldWrapper, FieldLabel, FieldInput, FieldError } from '../FormBuilder.styled'

export const Root = FieldWrapper

export const InputField = FieldInput

export const Label = styled(FieldLabel)<{ $active?: boolean; $error?: boolean }>`
    transition: transform 250ms ease;
    transform-origin: left;

    ${props =>
        props.$active
            ? `
                transform: translateY(0) scale(1);
            `
            : `
                transform: translateY(calc(100% + 1.5em)) scale(1.25);
                font-weight: 400;
                color: ${props.theme.colors.onSurface50};
            `}
`

export const Error = FieldError
