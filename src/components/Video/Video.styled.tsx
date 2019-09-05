import styled from 'styled-components'

export const Iframe = styled.iframe``

export const Root = styled.div<{ $fullWidth?: boolean }>`
    ${props =>
        props.$fullWidth &&
        `
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: 56.25%;
            
            ${Iframe} {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        `}
`
