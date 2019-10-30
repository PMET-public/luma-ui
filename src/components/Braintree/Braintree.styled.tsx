import styled from 'styled-components'

export const Root = styled.div`
    & .braintree-sheet {
        background-color: ${props => props.theme.colors.surface};
        color: ${props => props.theme.colors.onSurface};
        border: 0 none !important;
    }

    & .braintree-sheet__error {
        display: none;
    }

    &
        .braintree-sheet__content--form
        .braintree-form__field-group
        .braintree-form__field
        .braintree-form__hosted-field {
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 0.1rem solid ${props => props.theme.colors.primary25};
    }

    & .braintree-sheet__content--form .braintree-form__field-group .braintree-form__field-error {
        color: ${props => props.theme.colors.onError};
        min-height: 2rem;
        display: block;
    }

    & .braintree-sheet__content--form .braintree-form__field-group .braintree-form__field-error-icon use {
        fill: ${props => props.theme.colors.onError};
    }

    & .braintree-sheet__content--form .braintree-form__field-group {
        margin-bottom: 1rem;
    }
`
