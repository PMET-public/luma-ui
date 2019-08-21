import React from 'react'
import { Component } from '../../lib'
import { Root, Header, Main, Footer, TabBar } from './App.styled'

import { useResize } from '../../hooks/useResize'

import { FooterProps } from '../Footer'
import { IconProps } from '../Icon'

import LogoImage from '../../../public/images/luma.svg'
import IconSearchSvg from '@fortawesome/fontawesome-free/svgs/solid/search.svg'
import IconBagSvg from '@fortawesome/fontawesome-free/svgs/solid/shopping-bag.svg'
import IconHomeSvg from '@fortawesome/fontawesome-free/svgs/solid/store.svg'
import IconAccountSvg from '@fortawesome/fontawesome-free/svgs/solid/user.svg'

export type AppProps = {
    home: {
        active?: boolean
        icon?: IconProps
        text: string
    }

    logo: any

    menu: any[]

    help: {
        active?: boolean
        icon?: IconProps
        text: string
    }

    myAccount: {
        active?: boolean
        icon?: IconProps
        text: string
    }

    search: {
        active?: boolean
        icon?: IconProps
        text: string
    }

    cart: {
        active?: boolean
        count?: number
        icon?: IconProps
        text: string
    }

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
                height: vHeight,
            }}
            {...props}
        >
            <Header
                logo={{
                    svg: LogoImage,
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
                                svg: IconSearchSvg,
                                ...search.icon,
                            },
                        },
                        {
                            ...cart,
                            icon: {
                                svg: IconBagSvg,
                                ...cart.icon,
                            },
                        },
                    ],
                }}
            />

            <Main>{children}</Main>

            <Footer {...footer} />

            <TabBar
                items={[
                    {
                        ...home,
                        icon: {
                            ['aria-label']: home.text,
                            svg: IconHomeSvg,
                            ...home.icon,
                        },
                    },
                    {
                        ...myAccount,
                        icon: {
                            ['aria-label']: myAccount.text,
                            svg: IconAccountSvg,
                            ...myAccount.icon,
                        },
                    },
                    {
                        ...search,
                        icon: {
                            ['aria-label']: search.text,
                            svg: IconSearchSvg,
                            ...search.icon,
                        },
                    },
                    {
                        ...cart,
                        icon: {
                            ['aria-label']: cart.text,
                            svg: IconBagSvg,
                            ...cart.icon,
                        },
                    },
                ]}
            />
        </Root>
    )
}
