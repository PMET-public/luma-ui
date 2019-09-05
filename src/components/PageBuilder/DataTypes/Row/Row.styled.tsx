import styled from 'styled-components'

export const Wrapper = styled.div``

export const BgImage = styled.div<{ $src: string; $loaded?: boolean; $error?: boolean }>`
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 0;
        
        background: inherit;
        background-image: url('${props => props.$src}');

        /** Transition */
        transition: filter 305ms ease-out;
        filter: ${props => (props.$loaded ? 'opacity(1) blur(0)' : 'opacity(0) blur(30px)')};
`

export const Content = styled.div`
    position: relative;
    z-index: 1;
`

export const Root = styled.div<{ $appearance?: 'contained' | 'full-width' | 'full-bleed' }>`
    margin: 0 auto;
    max-width: ${props => (props.$appearance === 'contained' ? props.theme.layout.containedWidth : '100%')};
    position: relative;
    width: 100%;

    ${Content} {
        padding: 0 ${props => props.theme.layout.margin};
        margin: 0 auto;
        width: 100%;
        max-width: ${props => (props.$appearance === 'full-width' ? props.theme.layout.containedWidth : '100%')};
    }
`
