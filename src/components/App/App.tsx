import React, { useRef } from 'react'
import { Component, Props } from '../../lib'
import { Root, HeaderContainer, Main, FooterContainer, TabBarContainer } from './App.styled'

import { useMeasure } from '../../hooks/useMeasure'

import Header from '../Header'
import TabBar from '../TabBar'
import Footer, { FooterProps } from '../Footer'
import { IconProps } from '../Icon'

import LogoImageSvg from '../../../public/images/luma.svg'

import IconSearchSvg from 'remixicon/icons/System/search-line.svg'
import IconSearchActiveSvg from 'remixicon/icons/System/search-fill.svg'
import IconBagSvg from 'remixicon/icons/Finance/shopping-bag-line.svg'
import IconBagActiveSvg from 'remixicon/icons/Finance/shopping-bag-fill.svg'
import IconHomeSvg from 'remixicon/icons/Buildings/store-2-line.svg'
import IconHomeActiveSvg from 'remixicon/icons/Buildings/store-2-fill.svg'
// import IconFavoritesSvg from 'remixicon/icons/System/heart-line.svg'
// import IconFavoriteActiveSvg from 'remixicon/icons/System/heart-fill.svg'
import IconDarkModeSvg from 'remixicon/icons/Design/contrast-2-line.svg'
// import IconAccountSvg from 'remixicon/icons/User/user-3-line.svg'
// import IconAccountActiveSvg from 'remixicon/icons/User/user-3-fill.svg'
import { useAppContext } from '../../AppProvider'

export type AppProps = {
    logo: Props

    home: Props<{
        active?: boolean
        icon?: IconProps
        text: string
    }>

    menu?: Array<
        Props<{
            active?: boolean
            text: string
        }>
    >

    // myAccount: Props<{
    //     active?: boolean
    //     icon?: IconProps
    //     text: string
    // }>

    // favorites: Props<{
    //     active?: boolean
    //     icon?: IconProps
    //     text: string
    // }>

    search: Props<{
        active?: boolean
        icon?: IconProps
        text: string
    }>

    cart: Props<{
        active?: boolean
        count?: number
        icon?: IconProps
        text: string
    }>

    footer: FooterProps
}

export const App: Component<AppProps> = ({
    cart,
    children,
    footer,
    home,
    logo,
    menu,
    // myAccount,
    // favorites,
    search,
    ...props
}) => {
    const headerRef = useRef<HTMLDivElement>(null)

    const tabBarRef = useRef<HTMLDivElement>(null)

    const { height: headerHeight } = useMeasure(headerRef)

    const { height: tabBarHeight } = useMeasure(tabBarRef)

    const { state, actions } = useAppContext()

    return (
        <Root $mainHeight={`calc(100vh - ${headerHeight}px - ${tabBarHeight}px)`} {...props}>
            <HeaderContainer ref={headerRef} as="header" $margin>
                <Header
                    logo={{
                        svg: LogoImageSvg,
                        ...logo,
                    }}
                    menu={{
                        items: menu,
                    }}
                    utilities={{
                        items: [
                            // {
                            //     'aria-label': myAccount.text,
                            //     ...myAccount,
                            //     icon: {
                            //         svg: cart.myAccount ? IconAccountActiveSvg : IconAccountSvg,
                            //         ...myAccount.icon,
                            //     },
                            // },
                            {
                                as: 'button',
                                text: 'Dark Mode',
                                'data-utilities-darl-mode': true,
                                onClick: () => actions.setColorScheme(state.colorScheme === 'dark' ? 'light' : 'dark'),
                                icon: {
                                    svg: IconDarkModeSvg,
                                },
                            },
                            {
                                'aria-label': search.text,
                                ...search,
                                'data-utilities-search': true,
                                icon: {
                                    svg: search.active ? IconSearchActiveSvg : IconSearchSvg,
                                    ...search.icon,
                                },
                            },
                            {
                                'aria-label': cart.text,
                                ...cart,
                                'data-utilities-cart': true,
                                icon: {
                                    svg: cart.active ? IconBagActiveSvg : IconBagSvg,
                                    ...cart.icon,
                                },
                            },
                        ],
                    }}
                />
            </HeaderContainer>

            <Main>{children}</Main>

            {footer && (
                <FooterContainer as="footer">
                    <Footer {...footer} />
                </FooterContainer>
            )}

            <TabBarContainer ref={tabBarRef} as="nav">
                <TabBar
                    items={[
                        {
                            'aria-label': home.text,
                            ...home,
                            icon: {
                                svg: home.active ? IconHomeActiveSvg : IconHomeSvg,
                                ...home.icon,
                            },
                        },
                        // {
                        //     ...favorites,
                        //     'aria-label': favorites.text,
                        //     icon: {
                        //         svg: favorites.active ? IconFavoriteActiveSvg : IconFavoritesSvg,
                        //         ...favorites.icon,
                        //     },
                        // },
                        {
                            ...search,
                            'aria-label': search.text,
                            icon: {
                                svg: search.active ? IconSearchActiveSvg : IconSearchSvg,
                                ...search.icon,
                            },
                        },
                        {
                            ...cart,
                            'aria-label': cart.text,
                            icon: {
                                svg: cart.active ? IconBagActiveSvg : IconBagSvg,
                                ...cart.icon,
                            },
                        },
                    ]}
                />
            </TabBarContainer>
        </Root>
    )
}
