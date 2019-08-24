import styled from 'styled-components'

import IconSearchSvg from '@fortawesome/fontawesome-free/svgs/solid/search.svg'

export const Root = styled.div`
    --opacity: 0.64;
    border-bottom: 0.1rem solid ${props => props.theme.colors.onSurface50};
    color: ${props => props.theme.colors.onSurface};

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
`

export const Field = styled.input`
    appearance: none;
    background-color: inherit;
    border: 0 none;
    color: inherit;
    flex-grow: 1;
    font-size: inherit;
    font-weight: 600;
`

export const Count = styled.span`
    font-size: 0.8em;
    opacity: var(--opacity);
    transition: opacity 305ms ease;
    white-space: nowrap;
`

export const ResetButton = styled.button`
    font-size: 1.6rem;
    opacity: var(--opacity);
    transition: opacity 305ms ease;

    > svg {
        fill: currentColor;
        width: 1em;
    }
`
