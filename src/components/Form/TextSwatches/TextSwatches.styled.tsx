import styled from 'styled-components'

export const Items = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
`

export const Item = styled.span`
    position: relative;

    & > label {
        cursor: pointer;
        align-items: center;
        background-color: ${props => props.theme.colors.onPrimary};
        border-radius: 0.5rem;
        border: 0.1rem solid ${props => props.theme.colors.primary25};
        color: ${props => props.theme.colors.primary};
        display: flex;
        justify-content: center;
        padding: 1rem;
        transition: all 305ms ease;
    }

    & > input {
        position: absolute;
        opacity: 0;
    }

    & > input:checked + label {
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.onPrimary};
    }

    & > input:disabled + label {
        opacity: 0.35;
    }

    &:hover > input:not(:disabled) + label {
        border-color: ${props => props.theme.colors.primary75};
    }
`
