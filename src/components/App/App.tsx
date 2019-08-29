import React from 'react'
import { Component, Props } from '../../lib'
import { Root, HeaderWrapper, Main, FooterWrapper, TabBarWrapper } from './App.styled'

import { useResize } from '../../hooks/useResize'

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
import IconAccountSvg from 'remixicon/icons/System/heart-line.svg'
import IconAccountActiveSvg from 'remixicon/icons/System/heart-fill.svg'

export type AppProps = {
    logo: any

    home: Props<{
        active?: boolean
        icon?: IconProps
        text: string
    }>

    menu: Array<
        Props<{
            text: string
        }>
    >

    help: Props<{
        active?: boolean
        icon?: IconProps
        text: string
    }>

    myAccount: Props<{
        active?: boolean
        icon?: IconProps
        text: string
    }>

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
    help,
    home,
    logo,
    menu,
    myAccount,
    search,
    ...props
}) => {
    const { vHeight } = useResize()

    return (
        <Root
            style={{
                minHeight: vHeight,
            }}
            {...props}
        >
            <HeaderWrapper>
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
                            {
                                ...help,
                            },
                            {
                                ...myAccount,
                            },
                            {
                                ...search,
                                icon: {
                                    svg: search.active ? IconSearchActiveSvg : IconSearchSvg,
                                    ...search.icon,
                                },
                            },
                            {
                                ...cart,
                                icon: {
                                    svg: cart.active ? IconBagActiveSvg : IconBagSvg,
                                    ...cart.icon,
                                },
                            },
                        ],
                    }}
                />
            </HeaderWrapper>

            <Main>{children}</Main>

            <FooterWrapper>
                <Footer {...footer} />
            </FooterWrapper>

            <TabBarWrapper>
                <TabBar
                    items={[
                        {
                            ...home,
                            icon: {
                                ['aria-label']: home.text,
                                svg: home.active ? IconHomeActiveSvg : IconHomeSvg,
                                ...home.icon,
                            },
                        },
                        {
                            ...myAccount,
                            icon: {
                                ['aria-label']: myAccount.text,
                                svg: myAccount.active ? IconAccountActiveSvg : IconAccountSvg,
                                ...myAccount.icon,
                            },
                        },
                        {
                            ...search,
                            icon: {
                                ['aria-label']: search.text,
                                svg: search.active ? IconSearchActiveSvg : IconSearchSvg,
                                ...search.icon,
                            },
                        },
                        {
                            ...cart,
                            icon: {
                                ['aria-label']: cart.text,
                                svg: cart.active ? IconBagActiveSvg : IconBagSvg,
                                ...cart.icon,
                            },
                        },
                    ]}
                />
            </TabBarWrapper>
        </Root>
    )
}
