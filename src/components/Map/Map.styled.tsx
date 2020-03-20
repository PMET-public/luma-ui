import styled from 'styled-components'

export const Root = styled.div``

export const Location = styled.div<{ marker?: any }>`
    background-color: #222;
    color: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    min-width: 20rem;
    line-height: 1.5;
    transform: translateY(calc(-100%)) translateX(calc(-50% + 2rem));
    position: absolute;
`

export const Title = styled.strong`
    grid-area: title;
    font-size: 1.8rem;
    white-space: nowrap;
    padding-bottom: 0.65rem;
    display: inline-block;
    width: 100%;
`

export const Marker = styled.svg`
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    fill: ${props => props.theme.colors.onAccent};
    background-color: #222;
    border-radius: 50%;
    transform: scale(1);
    transition: transform 400ms ease;

    &[aria-selected] {
        background-color: transparent;
        fill: #222;
        transform: scale(1.2);

        & > path:first-of-type {
            fill: #fff;
        }
    }

    &:hover:not([aria-selected]) {
        transform: scale(1.2);
    }
`
