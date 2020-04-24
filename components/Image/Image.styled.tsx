import styled from 'styled-components'

export const Root = styled.img<{ $loaded?: boolean; $vignette?: boolean }>`
    background: rgba(204, 204, 204, 0.35);
    transition: filter ease 250ms;
    filter: blur(${props => (props.$loaded ? 0 : '10px')}) url(${props => (props.$vignette ? '#vignette' : '')});
`
