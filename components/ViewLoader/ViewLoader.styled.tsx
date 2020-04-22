import styled, { keyframes } from 'styled-components'

import LoaderImageSvg from '../../svgs/loader.svg'

const animation = keyframes`
    0% {
        transform: rotate(0deg) scale(1);
    }

    50% {
        transform: rotate(180deg) scale(1.2);
    }
    
    100% {
        transform: rotate(360deg) scale(1);
    }
`
export const Root = styled.div`
    align-items: center;
    background-color: ${props => props.theme.colors.surface};
    display: flex;
    height: 100%;
    justify-content: center;
    position: absolute;
    width: 100%;
`

export const LoaderImage = styled(LoaderImageSvg)`
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
    animation-name: ${animation};
    animation-timing-function: linear;
    display: block;
    height: auto;
    width: 6rem;
`
