import styled from 'styled-components'

export const Container = styled.div``

export const Wrapper = styled.div`
    display: flex;
`

export const Overlay = styled.div`
    transition: background-color 305ms ease-out;
    padding: 3rem;
    margin: 0 auto;
    display: inline-block;
`

export const Content = styled.div``

export const Button = styled.div`
    margin-top: 2rem;
    transition: opacity 305ms ease-out;
`

export const Root = styled.div<{
    $overlayColor?: string
    $showButton?: 'always' | 'never' | 'hover'
    $showOverlay?: 'always' | 'never' | 'hover'
}>`
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
