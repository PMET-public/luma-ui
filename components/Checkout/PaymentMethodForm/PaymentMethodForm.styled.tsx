import styled from 'styled-components'

import CardIconSvg from 'remixicon/icons/Finance/bank-card-fill.svg'

export const Root = styled.div`
    & .braintree-sheet {
        background-color: ${props => props.theme.colors.surface};
        color: ${props => props.theme.colors.onSurface};
        border-radius: 1rem;
    }

    & .braintree-upper-container:before {
        display: none;
    }

    & .braintree-sheet__error,
    .braintree-placeholder,
    .braintree-heading {
        display: none;
    }

    & .braintree-sheet__content--form .braintree-form__field-group .braintree-form__field .braintree-form__hosted-field {
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 0.1rem solid ${props => props.theme.colors.primary25};
    }

    & .braintree-sheet__content--form .braintree-form__field-group.braintree-form__field-group--has-error .braintree-form__field .braintree-form__hosted-field {
        border-bottom-color: ${props => props.theme.colors.error};
    }

    & .braintree-sheet__content--form .braintree-form__field-group .braintree-form__field-error {
        color: ${props => props.theme.colors.error};
        min-height: 2rem;
        display: block;
    }

    & .braintree-sheet__content--form .braintree-form__field-group .braintree-form__field-error-icon use {
        fill: ${props => props.theme.colors.error};
    }

    & .braintree-sheet__content--form .braintree-form__field-group {
        margin-bottom: 1rem;
    }

    & .braintree-sheet__header .braintree-sheet__header-label {
        display: none;
    }

    & .braintree-sheet__content--form .braintree-form__field-group .braintree-form__label {
        font-size: 1.3rem;
        font-weight: 600;
        pointer-events: none;
        color: ${props => props.theme.colors.onSurface};
    }

    & .braintree-sheet__content--form .braintree-form__field-group.braintree-form__field-group--card-type-known .braintree-form__field-secondary-icon,
    .braintree-sheet__content--form .braintree-form__field-group.braintree-form__field-group--has-error .braintree-form__field-error-icon,
    .braintree-sheet__content--form .braintree-form__field-group.braintree-form__field-group--is-focused .braintree-form__field-secondary-icon {
        display: none;
    }
`

export const Card = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    grid-gap: 1rem;
    align-items: center;
`

export const CardIcon = styled(CardIconSvg)`
    width: 3rem;
    fill: currentColor;
`

export const CardType = styled.span`
    font-weight: ${props => props.theme.typography.body.weight.semi};
`

export const CardNumber = styled.span``
