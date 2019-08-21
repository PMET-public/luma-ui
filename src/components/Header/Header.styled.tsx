import IconComponent from '../Icon'
import styled from 'styled-components'

export const Root = styled.div`
    align-items: center;
    background-color: ${props => props.theme.colors.surface};
    box-shadow: inset 0 -0.1rem 0 rgba(0, 0, 0, 0.09), inset 0 -0.2rem 0 rgba(255, 255, 255, 0.09);
    color: ${props => props.theme.colors.onSurface};
    display: grid;
    font-size: 1.4rem;
    grid-gap: 1rem 2rem;
    grid-template-areas: 'logo utilities' 'navigation navigation';
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
    padding: 1.6rem 2rem;
    width: 100%;

    @media (${props => props.theme.breakpoints.medium}) {
        grid-template-areas: 'logo navigation utilities';
        grid-template-columns: auto 1fr auto;
    }
`

// .menuWrapper > a,
// .utilities > a {
//     border-bottom: 0.1rem solid transparent;
//     color: var(--color-primary);
//     padding-top: 0.4rem;
//     padding-bottom: 0.3rem;
//     text-decoration: none;
//     transition: border 700ms ease;

//     &:hover, &.active {
//         border-color: var(--color-primary);
//     }
// }

export const Icon = styled(IconComponent)`
    font-size: 2.4rem;
`

export const Logo = styled.div`
    align-items: center;
    display: flex;
    grid-area: logo;

    & svg {
        height: 3rem;
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

    &::-webkit-scrollbar {
        display: none;
    }

    @media (${props => props.theme.breakpoints.medium}) {
        text-align: center;
    }
`

export const MenuWrapper = styled.div`
    display: inline-grid;
    font-family: var(--typography-heading-family);
    font-weight: 600;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    grid-gap: 2.5rem;
    text-align: initial;
    text-transform: uppercase;
    white-space: nowrap;
`

export const MenuItem = styled.span``

export const Utilities = styled.span`
    align-items: center;
    display: grid;
    font-size: 1.3rem;
    grid-area: utilities;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    grid-gap: 2.5rem;
    justify-content: flex-end;
`

export const UtilitiesItem = styled.div`
    ${Icon} {
        border-color: transparent !important;
    }
`
