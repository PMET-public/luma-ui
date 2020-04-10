import React from 'react'
import { Component, Props } from '../../lib'
import { Root, HeaderContainer, Main, FooterContainer, TabBarContainer } from './App.styled'

import Header from '../Header'
import TabBar from '../TabBar'
import Footer, { FooterProps } from '../Footer'
import { IconProps } from '../Icon'

import IconSearchSvg from 'remixicon/icons/System/search-line.svg'
import IconSearchActiveSvg from 'remixicon/icons/System/search-fill.svg'
import IconBagSvg from 'remixicon/icons/Finance/shopping-bag-line.svg'
import IconBagActiveSvg from 'remixicon/icons/Finance/shopping-bag-fill.svg'
import IconHomeSvg from 'remixicon/icons/Buildings/store-2-line.svg'
import IconHomeActiveSvg from 'remixicon/icons/Buildings/store-2-fill.svg'
// import IconFavoritesSvg from 'remixicon/icons/System/heart-line.svg'
// import IconFavoriteActiveSvg from 'remixicon/icons/System/heart-fill.svg'
// import IconAccountSvg from 'remixicon/icons/User/user-3-line.svg'
// import IconAccountActiveSvg from 'remixicon/icons/User/user-3-fill.svg'
// import { useAppContext } from '../../AppProvider'

export type AppProps = {
    loading?: boolean

    logo: Props<{ loading?: boolean }>

    home: Props<{
        active?: boolean
        icon?: IconProps
        text: string
    }>

    menu: Array<
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
    loading,
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
    return (
        <Root {...props}>
            <HeaderContainer as="header" $margin>
                <Header
                    loading={loading}
                    logo={logo}
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
                                'aria-label': search.text,
                                ...search,
                                className: 'breakpoint-smallOnly-hidden',
                                icon: {
                                    svg: search.active ? IconSearchActiveSvg : IconSearchSvg,
                                    ...search.icon,
                                },
                            },
                            {
                                'aria-label': cart.text,
                                ...cart,
                                className: 'breakpoint-smallOnly-hidden',
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

            <FooterContainer as="footer">
                <Footer loading={loading} {...footer} />
            </FooterContainer>

            <TabBarContainer as="nav">
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
