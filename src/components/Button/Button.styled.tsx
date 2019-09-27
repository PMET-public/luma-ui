import styled from 'styled-components'

export const Root = styled.div<{ $secondary?: boolean }>`
    align-items: center;
    background-color: ${props => (props.$secondary ? 'transparent' : 'currentColor')};
    border-radius: 2.4rem;
    border: 0.1rem solid;
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

    &[disabled] {
        opacity: 0.3;
    }

    ${props =>
        !props.$secondary &&
        `
            & > span {
                filter: invert(1);
            }
        `}
`
