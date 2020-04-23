import styled from 'styled-components'

export const Root = styled.div<{ $height?: number }>`
    width: 100%;
    overflow-y: hidden;

    ${props =>
        props.$height &&
        `
            height: calc(${props.$height} + 3rem);
            `}
`

export const Scroller = styled.div<{
    $gap: number
    $padding: number
    $show: number | 'auto'
    $hideScrollBar?: boolean
    $snap?: boolean
}>`
    --gap: ${props => props.$gap}rem;
    --padding: ${props => props.$padding}rem;
    --show: ${props => props.$show};

    -webkit-overflow-scrolling: touch;
    display: grid;
    grid-auto-columns: ${props => (props.$show === 'auto' ? 'max-content' : 'calc(100% / var(--show) - var(--padding))')};
    grid-auto-flow: column;
    grid-gap: var(--gap);
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-padding: var(--padding);
    scroll-snap-type: ${props => (props.$snap ? `x mandatory` : `unset`)};

    ${props =>
        props.$hideScrollBar
            ? `
            
            scrollbar-width: none;
            &::-webkit-scrollbar {
                display: none;
            }
        `
            : `
            padding-bottom: 1rem;

            scrollbar-color: ${props.theme.colors.primary25} ${props.theme.colors.primary15};
            scrollbar-width: thin;

            &::-webkit-scrollbar {
                height: 0.2rem;
            }

            &::-webkit-scrollbar-track {
                margin: 0 10%;
                border-radius: 3rem;
                background: ${props.theme.colors.primary15};
            }

            &::-webkit-scrollbar-thumb {
                border-radius: 3rem;
                background: ${props.theme.colors.primary25};
            }
        `}
`

export const Item = styled.div`
    scroll-snap-align: center;
    display: inline-block;
`
