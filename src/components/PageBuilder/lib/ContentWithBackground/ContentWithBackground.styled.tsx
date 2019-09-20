import styled from 'styled-components'

export const Root = styled.div<{ $backgroundColor?: string }>`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${props => props.$backgroundColor || 'transparent'};
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
        background-color: ${props => props.theme.colors.onSurface5};

        /** Transition */
        transition: opacity 205ms ease-out;
        opacity: ${props => (props.$loaded ? '1' : '0')};
`

export const Content = styled.div`
    position: relative;
`
