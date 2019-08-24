import styled from 'styled-components'

export const Root = styled.button<{ $fill?: boolean; $color: 'primary' | 'secondary' }>`
    align-items: center;
    background-color: ${props => (props.$fill ? 'currentColor' : 'transparent')};
    border-radius: 2.4rem;
    border: 0.1rem solid;
    color: ${props => (props.$color === 'primary' ? props.theme.colors.primary : props.theme.colors.secondary)};
    display: inline-flex;
    font-size: 1.6rem;
    font-weight: 600;
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

    ${props =>
        props.$fill &&
        `
            & > span {
                filter: invert(1);
            }
        `}
`
