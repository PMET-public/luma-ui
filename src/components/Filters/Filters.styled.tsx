import styled from 'styled-components'

import ToggleIconSvg from 'remixicon/icons/System/arrow-down-s-line.svg'

export const Root = styled.div`
    display: grid;
    grid-gap: 4rem;
    grid-auto-rows: max-content;
    grid-auto-flow: row;
`

export const Group = styled.div`
    display: grid;
    grid-gap: 1.6rem;
`

export const Wrapper = styled.div<{ $height: string; $duration: string }>`
    height: auto;
    max-height: ${props => props.$height};
    overflow-y: hidden;
    transition: max-height ${props => props.$duration} ease;
`

export const List = styled.dl`
    display: grid;
    grid-gap: 1.4rem;
`

export const GroupLabel = styled.dt`
    font-size: 1.8rem;
    font-weight: 600;
`

export const Icon = styled.svg`
    fill: currentColor;
    transition: opacity 305ms ease;
    width: 1.3em;
`

export const Item = styled.span<{ $active?: boolean }>`
    align-items: center;
    display: inline-grid;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    grid-gap: 1rem;
    font-size: 1.5rem;

    &:hover {
        opacity: 0.75;
    }

    ${Icon} {
        opacity: ${props => (props.$active ? '1' : '0.1')};
    }
`

export const Count = styled.span`
    filter: opacity(0.45);
    font-size: 0.9em;
`
export const ToggleIcon = styled(ToggleIconSvg)`
    fill: currentColor;
    height: 1.3em;
    margin-right: 0.5rem;
    transition: transform var(--transition-duration) ease;
    width: 1em;
`

export const ToggleButton = styled.button<{ $active?: boolean }>`
    align-items: center;
    color: inherit;
    cursor: pointer;
    display: inline-flex;
    opacity: 0.5;
    font-size: 0.9em;

    ${ToggleIcon} {
        ${props => props.$active && 'transform: rotate(180deg);'}
    }
`
