import React from 'react'
import { Component, Element, Props } from '../../lib'
import styles from './App.css'

import { useResize } from '../../hooks/useResize'

import Header from '../Header'
import TabBar from '../TabBar'
import Logo from '../../../public/images/luma.svg'
import Footer, { FooterProps } from '../Footer'
import { IconProps } from '../Icon'

import IconSearch from '@fortawesome/fontawesome-free/svgs/solid/search.svg'
import IconBag from '@fortawesome/fontawesome-free/svgs/solid/shopping-bag.svg'
import IconHome from '@fortawesome/fontawesome-free/svgs/solid/store.svg'
import IconAccount from '@fortawesome/fontawesome-free/svgs/solid/user.svg'

export type AppProps = Props<{
    home: Props<{
        active?: boolean
        icon?: IconProps
        text: string
    }>

    logo: Props

    menu: Props[]

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
}>

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
        <Element className={styles.root} {...props}>
            <div
                className={styles.wrapper}
                style={{
                    height: vHeight,
                }}
            >
                <Header
                    as="header"
                    className={styles.header}
                    logo={{
                        svg: Logo,
                        ...logo,
                        className: styles.headerLogo,
                    }}
                    menu={{
                        items: menu,
                        className: styles.headerMenu,
                    }}
                    utilities={{
                        className: styles.headerUtilities,
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
                                    svg: IconSearch,
                                    ...search.icon,
                                },
                            },
                            {
                                ...cart,
                                icon: {
                                    svg: IconBag,
                                    ...cart.icon,
                                },
                            },
                        ],
                    }}
                />

                <main className={styles.main}>
                    {children}
                </main>

                <Footer
                    as="footer"
                    className={styles.footer}
                    {...footer}
                />

                <TabBar
                    as="nav"
                    className={styles.tabBar}
                    items={[
                        {
                            ...home,
                            icon: {
                                ['aria-label']: home.text,
                                svg: IconHome,
                                ...home.icon,
                            },
                        },
                        {
                            ...myAccount,
                            icon: {
                                ['aria-label']: myAccount.text,
                                svg: IconAccount,
                                ...myAccount.icon,
                            },
                        },
                        {
                            ...search,
                            icon: {
                                ['aria-label']: search.text,
                                svg: IconSearch,
                                ...search.icon,
                            },
                        },
                        {
                            ...cart,
                            icon: {
                                ['aria-label']: cart.text,
                                svg: IconBag,
                                ...cart.icon,
                            },
                        },
                    ]}
                />
            </div>
        </Element>
    )
}
