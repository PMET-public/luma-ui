import styled from 'styled-components'

export const Container = styled.div``

export const Overlay = styled.div`
    transition: background-color 305ms ease-out;
    display: flex;
    padding: 2rem;

    @media ${props => props.theme.breakpoints.medium} {
        max-width: 90rem;
        padding: 3rem;
    }
`

export const Wrapper = styled.div<{ $appearance?: 'poster' | 'collage-left' | 'collage-centered' | 'collage-right' }>`
    display: flex;
    width: auto;
    
    ${props =>
        props.$appearance === 'poster' &&
        `
            ${Overlay} {
                width: 100%;
                align-items: center;
                justify-content: center;
            }
        `}

    ${props =>
        props.$appearance === 'collage-centered' &&
        `
            justify-content: center;
      
        `}
    
    ${props =>
        props.$appearance === 'collage-right' &&
        `
            justify-content: flex-end;
        
        `}
`

export const ContentWrapper = styled.div`
    & > *:not(:nth-child(1)) {
        margin-top: 3rem;
    }
`

export const Content = styled.div``

export const Button = styled.div`
    transition: opacity 305ms ease-out;
    color: #fff;
`

export const Root = styled.div<{
    $overlayColor?: string
    $showButton?: 'always' | 'never' | 'hover'
    $showOverlay?: 'always' | 'never' | 'hover'
}>`
    color: #222; /* Default PB Content text color */

    ${props =>
        props.$showOverlay === 'hover' &&
        `
                &:hover ${Overlay} {
                    background-color: ${props.$overlayColor || 'transparent'} !important;
                }
            `}

    ${props =>
        props.$showButton === 'hover' &&
        `
                &:hover ${Button} {
                    opacity: 1 !important;
                    visibility: visible !important;
                }
            `}
`
