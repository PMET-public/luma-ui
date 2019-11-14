import styled from 'styled-components'

import { Root as HeaderRoot, Logo as HeaderLogo, Menu as HeaderMenu, Utilities as HeaderUtilities } from '../Header'
import { Wrapper as ContainerWrapper } from '../Container'

export const Root = styled.div<{ $mainHeight: string }>`
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-template-rows: auto minmax(${props => props.$mainHeight}, 1fr) auto auto;
    width: 100%;
`

export const HeaderContainer = styled(ContainerWrapper)`
    background-color: ${props => props.theme.colors.surface90};
    box-shadow: inset 0 -0.1rem 0 rgba(0, 0, 0, 0.09), inset 0 -0.2rem 0 rgba(255, 255, 255, 0.09);
    color: ${props => props.theme.colors.onSurface};
    position: sticky;
    top: 0;
    z-index: 2;

    ${HeaderRoot} {
        @media ${props => props.theme.breakpoints.smallOnly} {
            grid-template-areas: 'logo utilities';
        }
    }

    ${HeaderLogo} {
        line-height: 0;
        margin: 0;
        z-index: 2;

        & svg {
            height: 3rem;
        }
    }

    ${HeaderMenu} {
        @media ${props => props.theme.breakpoints.smallOnly} {
            display: none;
        }
    }

    ${HeaderUtilities} {
        /* Hide Search and Cart on Mobile */
        & > [data-utilities-search],
        & > [data-utilities-cart] {
            @media ${props => props.theme.breakpoints.smallOnly} {
                display: none;
            }
        }
    }
`

export const Main = styled.main`
    box-sizing: border-box;
    position: relative;
`

export const FooterContainer = styled(ContainerWrapper)`
    box-shadow: inset 0 0.1rem 0 rgba(0, 0, 0, 0.09), inset 0 0.2rem 0 rgba(255, 255, 255, 0.09);
`

export const TabBarContainer = styled(ContainerWrapper)`
    background-color: ${props => props.theme.colors.surface90};
    position: sticky;
    bottom: 0;
    z-index: 2;

    @media ${props => props.theme.breakpoints.medium} {
        display: none;
    }
`
