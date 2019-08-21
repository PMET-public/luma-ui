import styled from 'styled-components'

export const Root = styled.div<{ gap: number; padding: number; show: number }>`
    --gap: ${props => props.gap}rem;
    --padding: ${props => props.padding}rem;
    --show: ${props => props.show};

    -webkit-overflow-scrolling: touch;
    display: grid;
    grid-auto-columns: calc(100% / var(--show) - var(--padding));
    grid-auto-flow: column;
    grid-gap: var(--gap);
    overflow-x: scroll;
    overflow-y: hidden;
    padding-bottom: 1rem;
    scroll-padding: var(--padding);
    scroll-snap-type: x mandatory;
    width: 100%;

    &::-webkit-scrollbar {
        height: 0.2rem;
    }

    &::-webkit-scrollbar-track {
        margin: 0 10%;
        border-radius: 3rem;
        background: ${props => props.theme.colors.primary15};
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 3rem;
        background: ${props => props.theme.colors.primary25};
    }
`

export const Item = styled.div`
    scroll-snap-align: center;
    display: inline-block;
`
