import styled from 'styled-components'
import { Label as LabelComponent } from '../Form'

export const Label = styled(LabelComponent)<{ $active?: boolean }>`
    transition: transform 250ms ease, font-size 250ms ease;
    transform-origin: left;

    ${props =>
        props.$active
            ? `
                transform: translateY(0);
            `
            : `
                transform: translateY(calc(100% + 1.5em));
                font-weight: 400;
                color: ${props.theme.colors.onSurface75};
            `}
`
