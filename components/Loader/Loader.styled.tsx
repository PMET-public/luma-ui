import styled, { keyframes } from 'styled-components'

const animation = keyframes`
    0%{
        transform: scale(1);
        opacity: 1;
    }
    50%{
        transform:  scale(1);
        opacity: 0.25
    }
    100%{
        transform: scale(1);
        opacity: 1;
    }
   
`

export const Root = styled.div`
    display: grid;
    font-size: inherit;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    grid-gap: 0.5em;
    justify-content: center;

    & > span {
        --duration: 600ms;

        display: block;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        background-color: currentColor;
        transform-origin: 50%;
        animation-duration: var(--duration);
        animation-name: ${animation};
        animation-iteration-count: infinite;
        animation-timing-function: linear;

        + span {
            animation-delay: calc(var(--duration) * 0.25);
        }

        + span + span {
            animation-delay: calc(var(--duration) * 0.5);
        }
    }
`
