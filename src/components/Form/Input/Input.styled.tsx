import styled from 'styled-components'

export const Label = styled.div<{ $active?: boolean; $error?: boolean }>`
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
