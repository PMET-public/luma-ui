import styled from 'styled-components'

export const Root = styled.img<{ $loaded?: boolean; $vignette?: boolean }>`
    background: rgba(204, 204, 204, 0.5);
    transition-property: opacity;
    transition-duration: 500ms;
    transition-timing-function: ease;
    opacity: ${({ $loaded }) => ($loaded ? 1 : 0.5)};
    filter: ${({ $vignette }) => $vignette && `url(#vignette)`};
    overflow: hidden;
`
