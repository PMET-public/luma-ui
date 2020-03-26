import styled from 'styled-components'

export enum FieldColors {
    default = '',
    error = 'error',
    warning = 'warning',
    notice = 'notice',
}

export const Root = styled.form`
    display: grid;
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    grid-auto-rows: max-content;
`

export const Field = styled.div`
    display: grid;
    grid-gap: 1rem;
`

export const Label = styled.label<{ $color?: FieldColors }>`
    font-size: 1.3rem;
    font-weight: 600;
    pointer-events: none;
    color: ${({ theme, $color = theme.colors.onSurface }) => theme.colors[$color]};
`

export const Error = styled.span<{ $color?: FieldColors }>`
    color: ${({ theme, $color = FieldColors.error }) => theme.colors[$color]};
    min-height: 1em;
    font-size: 0.8em;
    line-height: 1.3;
`

export const FormError = styled.span<{ $color?: FieldColors }>`
    background-color: ${({ theme, $color = theme.colors.onSurface }) => theme.colors[$color]};
    border-radius: 0.25rem;
    border: 0.1rem solid ${({ theme, $color = FieldColors.error }) => theme.colors[$color]};
    color: ${({ theme, $color = FieldColors.error }) => theme.colors[$color]};
    font-size: 90%;
    min-height: 1em;
    padding: 1rem;
`

export const Input = styled.input<{ $color?: FieldColors }>`
    appearance: none;
    box-sizing: border-box;
    border-radius: 0;
    height: 3.5rem;
    padding: 0.6rem 0;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 0.1rem solid ${({ theme, $color = theme.colors.primary15 }) => theme.colors[$color]};
    transition: border 250ms ease, background-color 250ms ease;
    background-color: transparent;

    &::placeholder {
        color: ${props => props.theme.colors.primary50};
    }

    &:focus {
        outline: none !important;
        border-bottom-color: ${props => props.theme.colors.accent50};
        background-color: ${props => props.theme.colors.accent5};
    }

    &:disabled {
        border-bottom-style: dashed;
        border-bottom-color: ${props => props.theme.colors.primary10};
    }
`
