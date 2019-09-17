import styled from 'styled-components'

export const Wrapper = styled.div<{ $verticalAlign?: 'bottom' | 'middle' }>`
    display: flex;
    ${props => props.$verticalAlign === 'bottom' && 'align-items: flex-end;'}
    ${props => props.$verticalAlign === 'middle' && 'align-items: center;'}
`
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
        font-size: 3rem;
        @media ${props => props.theme.breakpoints.medium} {
            font-size: 4rem;
        }
    }
`

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
