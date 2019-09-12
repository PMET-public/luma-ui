import styled from 'styled-components'

export const Root = styled.div`
    position: relative;
`

export const BgImage = styled.div<{ $src: string; $loaded?: boolean; $error?: boolean }>`
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 0;
        
        background-image: url('${props => props.$src}');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        /** Transition */
        transition: filter 305ms ease-out;
        filter: ${props => (props.$loaded ? 'opacity(1) blur(0)' : 'opacity(0) blur(30px)')};
`

export const Content = styled.div`
    position: relative;
`
