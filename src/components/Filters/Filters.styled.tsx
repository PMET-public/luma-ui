import styled from 'styled-components'

import ToggleIconSvg from '@fortawesome/fontawesome-free/svgs/solid/angle-double-down.svg'
import CheckedIconSvg from '@fortawesome/fontawesome-free/svgs/solid/check-circle.svg'
import CheckIconSvg from '@fortawesome/fontawesome-free/svgs/solid/circle.svg'

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

export const Wrapper = styled.div<{ height: string; duration: string }>`
    height: auto;
    max-height: ${props => props.height};
    overflow-y: hidden;
    transition: max-height ${props => props.duration} ease;
`

export const List = styled.dl`
    display: grid;
    grid-gap: 1.4rem;
`

export const GroupLabel = styled.dt`
    font-size: 1.8rem;
    font-weight: 600;
`

export const Item = styled.span`
    align-items: center;
    display: inline-grid;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    grid-gap: 1rem;
    font-size: 1.5rem;

    &:hover {
        opacity: 0.75;
    }
`

export const Count = styled.span`
    filter: opacity(0.45);
    font-size: 0.9em;
`

export const CheckIcon = styled(CheckIconSvg)<{ active?: boolean }>`
    fill: currentColor;
    opacity: ${props => (props.active ? '1' : '0.1')};
    transition: opacity 305ms ease;
    width: 1em;
`

export const CheckedIcon = styled(CheckedIconSvg)<{ active?: boolean }>`
    fill: currentColor;
    opacity: ${props => (props.active ? '1' : '0.1')};
    transition: opacity 305ms ease;
    width: 1em;
`

export const ToggleIcon = styled(ToggleIconSvg)<{ active?: boolean }>`
    fill: currentColor;
    height: 0.8em;
    margin-right: 0.5rem;
    transition: transform var(--transition-duration) ease;
    width: 0.8em;
    ${props => props.active && 'transform: rotate(180deg)'}
`

export const ToggleButton = styled.button`
    align-items: center;
    color: inherit;
    cursor: pointer;
    display: inline-flex;
    filter: opacity(0.75);
    font-size: 1em;
`
