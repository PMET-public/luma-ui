import styled from 'styled-components'

import HeaderComponent, { Logo as HeaderLogo, Menu as HeaderMenu, Utilities as HeaderUtilities } from '../Header'
import FooterComponent from '../Footer'
import TabBarComponent from '../TabBar'

export const Root = styled.div`
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-template-rows: auto 1fr auto auto;
`

export const Header = styled(HeaderComponent)`
    ${HeaderLogo} {
        line-height: 0;
        margin: 0;
        padding: 0;
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
        & *:nth-child(3),
        & *:nth-child(4) {
            @media (--small-screen-only) {
                display: none;
            }
        }
    }

    @media ${props => props.theme.breakpoints.smallOnly} {
        grid-template-areas: 'logo utilities';
    }
`

export const Main = styled.main`
    box-sizing: border-box;
    position: relative;
`

export const Footer = styled(FooterComponent)``

export const TabBar = styled(TabBarComponent)`
    position: sticky;
    bottom: 0;
    z-index: 2;

    @media ${props => props.theme.breakpoints.medium} {
        display: none;
    }
`
