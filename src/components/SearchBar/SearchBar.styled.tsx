import styled from 'styled-components'

import IconSearchSvg from 'remixicon/icons/System/search-line.svg'
import ResetIconSvg from 'remixicon/icons/System/close-line.svg'

export const Root = styled.div`
    --opacity: 0.5;
    background: ${props => props.theme.colors.onSurface10};
    border-radius: 1rem;
    color: ${props => props.theme.colors.onSurface};
    width: 100%;

    &:hover,
    &:focus-within {
        --opacity: 1;
    }
`

export const Wrapper = styled.label`
    align-items: center;
    display: flex;
    padding: 0.5rem 0.75rem;
    width: 100%;

    & > * {
        padding: 1rem;
        padding: 0.75rem;
    }
`

export const SearchIcon = styled(IconSearchSvg)`
    fill: currentColor;
    width: 1.1em;
    opacity: var(--opacity);
`

export const Field = styled.input`
    appearance: none;
    background-color: inherit;
    border: 0 none;
    color: inherit;
    flex-grow: 1;
    font-size: inherit;
    font-weight: 600;
    width: 4rem;
`

export const Count = styled.span`
    font-size: 0.8em;
    opacity: var(--opacity);
    transition: opacity 305ms ease;
    white-space: nowrap;
`

export const ResetButton = styled.button`
    opacity: var(--opacity);
    transition: opacity 305ms ease;
    line-height: 0;
`
export const ResetIcon = styled(ResetIconSvg)`
    fill: currentColor;
    height: 1.1em;
`
