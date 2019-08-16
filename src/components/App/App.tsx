import React from 'react'
import { Component, Element, Props } from '../../lib'
import defaultClasses from './App.css'

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
    classes?: typeof defaultClasses

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
    classes,
    footer,
    help,
    home,
    logo,
    menu,
    myAccount,
    search,
    ...props
}) => {
    const styles = { ...defaultClasses, ...classes }

    const { vHeight } = useResize()

    return (
        <Element {...props} className={styles.root}
            style={{
                height: vHeight,
            }}
        >
            <Header 
                as="header" 
                classes={{
                    root: styles.header,
                    logo: styles.headerLogo,
                    menu: styles.headerMenu,
                    utilities: styles.headerUtilities,
                }}
                logo={{
                    ...logo,
                    svg: Logo,
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
                {...footer} 
            />
                            
            <TabBar  
                as="nav" 
                classes={{
                    root: styles.tabBar,
                }}
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
        </Element>
    )
}
