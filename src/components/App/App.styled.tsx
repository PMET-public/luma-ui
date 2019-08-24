import styled from 'styled-components'

import { Logo as HeaderLogo, Menu as HeaderMenu, Utilities as HeaderUtilities } from '../Header'

export const Root = styled.div`
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-template-rows: auto 1fr auto auto;
    width: 100%;
`

export const HeaderWrapper = styled.div`
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
        & > *:nth-child(3),
        & > *:nth-child(4) {
            @media ${props => props.theme.breakpoints.smallOnly} {
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

export const FooterWrapper = styled.footer``

export const TabBarWrapper = styled.nav`
    position: sticky;
    bottom: 0;
    z-index: 2;

    @media ${props => props.theme.breakpoints.medium} {
        display: none;
    }
`
