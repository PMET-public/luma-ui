import { Root as IconRoot } from '../Icon/Icon.styled'
import styled from 'styled-components'

export const Root = styled.div`
    align-items: center;
    display: grid;
    font-size: 1.4rem;
    grid-gap: 1rem 2rem;
    grid-template-areas: 'logo utilities' 'navigation navigation';
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
    width: 100%;
    padding: 1rem 0;
    min-height: 6rem;

    @media ${props => props.theme.breakpoints.smallOnly} {
        grid-template-areas: 'logo utilities';
    }

    @media ${props => props.theme.breakpoints.medium} {
        grid-template-areas: 'logo navigation utilities';
        grid-template-columns: auto 1fr auto;
    }
`

export const IconWrapper = styled.div`
    ${IconRoot} {
        font-size: 2.4rem;
    }
`

export const Logo = styled.div`
    align-items: center;
    display: flex;
    grid-area: logo;
    line-height: 0;
    margin: 0;
    z-index: 2;

    & svg,
    & img {
        height: 3rem;
        max-width: 15rem;
    }

    & a {
        border: 0 none !important;
        color: inherit !important;
        text-decoration: none !important;
    }
`

export const Menu = styled.div`
    -webkit-overflow-scrolling: touch;
    grid-area: navigation;
    overflow-x: auto;
    padding: 0.5rem 0;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    @media ${props => props.theme.breakpoints.smallOnly} {
        display: none;
    }

    @media ${props => props.theme.breakpoints.medium} {
        text-align: center;
    }
`

export const MenuWrapper = styled.div`
    display: inline-grid;
    font-family: ${props => props.theme.typography.heading.family};
    font-weight: 600;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    grid-gap: 2.5rem;
    text-align: initial;
    text-transform: uppercase;
    white-space: nowrap;
`

export const Link = styled.span<{ $active?: boolean }>`
    color: ${props => props.theme.colors.primary};
    padding-top: 0.4rem;
    padding-bottom: 0.3rem;
    text-decoration: none;
    transition: border 700ms ease;
    border-bottom: 0.1rem solid ${props => (props.$active ? props.theme.colors.primary : 'transparent')};

    &:hover {
        border-color: ${props => props.theme.colors.primary};
    }
`

export const MenuItem = styled(Link)``

export const Utilities = styled.div`
    align-items: center;
    display: grid;
    font-size: 1.3rem;
    grid-area: utilities;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    grid-gap: 2rem;
    justify-content: flex-end;
`

export const UtilitiesItem = styled(Link)<{ $icon?: boolean }>`
    ${props => props.$icon && 'border-color: transparent !important;'}
`
