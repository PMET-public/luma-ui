import styled from 'styled-components'

export const Wrapper = styled.span<{ $disabled?: boolean }>`
    position: relative;
    width: 100%;

    &::after {
        content: '';
        position: absolute;
        top: calc(50% - 0.2em);
        right: 0.5em;
        width: 0;
        height: 0;
        display: inline-block;
        border: 0.3em solid transparent;
        border-top-color: ${props => props.theme.colors.onSurface75};
        opacity: ${props => (props.$disabled ? 0 : 1)};
        transition: opacity 250ms ease;
    }
`

export const Select = styled.select`
    width: 100%;
    border-radius: 0;
    appearance: none;
    padding-right: 1.65em;

    & option {
        background-color: initial;
        color: initial;
        font-size: initial;
    }
`
