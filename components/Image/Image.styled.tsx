import styled from 'styled-components'

export const Root = styled.span<{ $vignette?: number }>`
    display: inline-block;
    position: relative;
    display: inherit;
    line-height: 0;

    ${props =>
        !!props.$vignette &&
        `
            &::after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                box-shadow: inset 0 0 ${props.$vignette}rem rgba(0, 0, 0, 0.15);
            }
        `}
`

export const Placeholder = styled.img`
    background: rgba(204, 204, 204, 0.45);
`
