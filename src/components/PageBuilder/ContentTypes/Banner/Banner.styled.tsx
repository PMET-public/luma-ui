import styled from 'styled-components'

export const Overlay = styled.div`
    transition: background-color 305ms ease-out;
    padding: 1rem;
    margin: 0 auto;
    display: inline-block;

    @media ${props => props.theme.breakpoints.medium} {
        padding: 3rem;
    }
`

export const Content = styled.div`
    display: grid;
    font-size: 1.7rem;

    & h1,
    & h2,
    & h3,
    & h4,
    & p {
        &:not(:last-child) {
            margin-bottom: 1rem;
        }
    }

    & h1,
    & h2,
    & h3,
    & h4 {
        font-size: 200%;
        @media ${props => props.theme.breakpoints.medium} {
            font-size: 240%;
        }
    }
`

export const Button = styled.div`
    margin-top: 2rem;
    transition: opacity 305ms ease-out;
`

export const Root = styled.div<{
    $showButton?: 'always' | 'never' | 'hover'
    $showOverlay?: 'always' | 'never' | 'hover'
    $overlayColor?: string
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
