import styled from 'styled-components'

export const Root = styled.button<{ $secondary?: boolean; $outline?: boolean }>`
    align-items: center;
    background-color: ${props => (props.$secondary ? props.theme.colors.surface : props.theme.colors.onSurface)};
    color: ${props => (props.$secondary ? props.theme.colors.onSurface : props.theme.colors.surface)};

    ${props =>
        props.$outline &&
        `
            color: ${props.$secondary ? props.theme.colors.surface : props.theme.colors.onSurface};
            border: 0.1rem solid currentColor;
            background-color: transparent;
        `}

    border-radius: 2.4rem;
    box-sizing: border-box;
    display: inline-flex;
    font-size: 1.6rem;
    font-weight: 800;
    height: 3em;
    justify-content: center;
    line-height: 1;
    padding: 1.6rem 2.8rem;
    transition-duration: 305ms;
    transition-property: opacity, color, background-color;
    transition-timing-function: ease;

    & a[href] {
        text-decoration: none !important;
        color: inherit;
    }

    &[disabled] {
        opacity: 0.3;
    }
`
