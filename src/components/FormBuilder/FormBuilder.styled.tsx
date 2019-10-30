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
    font-size: 1em;
    font-weight: 600;
    pointer-events: none;
    color: ${props => (props.$error ? props.theme.colors.onError : 'unset')};
`

export const FieldError = styled.span`
    color: ${props => props.theme.colors.onError};
    min-height: 1em;
    font-size: 90%;
`
