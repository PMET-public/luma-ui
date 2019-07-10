import React from 'react'
import { Component, classes } from '../../lib'

import AppBar from '../../components/AppBar'
import Header from '../../components/Header'
import Icon from '../../components/Icon'
import TabBar from '../../components/TabBar'
import Logo from '../../../public/images/luma.svg'
import Link, { LinkRoute } from '../../components/Link'
import Image from '../../components/Image'

import IconSearch from '../../components/Icon/svgs/thin/magnifier.svg'
import IconBag from '../../components/Icon/svgs/thin/bag.svg'
import IconHome from '../../components/Icon/svgs/thin/store.svg'
import IconAccount from '../../components/Icon/svgs/thin/user.svg'

export type AppProps = {
    home: {
        label?: string
        link: LinkRoute
    }
    
    logo: {
        title: string
        src?: string
        link: LinkRoute
    }

    menu?: Array<{
        label: string
        link: LinkRoute
    }>

    help?: {
        label?: string
        link: LinkRoute
    }

    myAccount: {
        label?: string
        link: LinkRoute
        count?: number
    }

    search: {
        label?: string
        link: LinkRoute
    }

    cart: {
        count?: number
        label?: string
        link: LinkRoute
    }
}

export const App: Component<AppProps> = ({
    as: App = 'div',
    cart,
    children,
    help,
    home,
    logo,
    menu,
    myAccount,
    search,
    ...props
}) => {
    return (
        <App {...props} className={classes('app', props.className)}>
            <AppBar hideOnOffset={100}>
                <Header className="app__header">
                    <Header.Logo className="app__header__logo" as="h1">
                        <Link {...logo.link}>
                            {logo.src ? (
                                <Image className="app__header__logo__image" src={logo.src} alt={logo.title} />
                            ) : (
                                <Logo className="app__header__logo__image" height="40" aria-label={logo.title} />
                            )}
                        </Link>
                    </Header.Logo>

                    {menu && menu.length > 0 && (
                        <Header.Menu className="app__header__menu">
                            {menu.map((item, key) => (
                                <Link key={key} {...item.link}>{item.label}</Link>
                            ))}
                        </Header.Menu>
                    )}

                    <Header.Utilities className="app__header__utilities">
                        {help && <Link {...help.link}>
                            {help.label || 'Help'}
                        </Link>}
                       
                        <Link className="app__header__utilities__account" {...myAccount.link}>
                            {myAccount.label || 'My Account'}
                        </Link>

                        <Icon className="app__header__utilities__search"
                            as={Link} {...search.link}
                        >
                            <IconSearch arial-label={search.label || 'Search'} />
                        </Icon>

                        <Icon className="app__header__utilities__cart"
                            as={Link} {...cart.link}
                            count={cart.count}
                        >
                            <IconBag aria-label={cart.label || 'My Bag'} />
                        </Icon>
                    </Header.Utilities>
                </Header>
            </AppBar>

            {children}

            <TabBar className="app__tab-bar">
                <TabBar.Item isActive={true}>
                    <Icon as={Link} {...home.link}>
                        <IconHome />
                    </Icon>
                </TabBar.Item>

                <TabBar.Item>
                    <Icon count={myAccount.count} as={Link} {...myAccount.link}>
                        <IconAccount />
                    </Icon>
                </TabBar.Item>

                <TabBar.Item>
                    <Icon as={Link} {...search.link}>
                        <IconSearch />
                    </Icon>
                </TabBar.Item>

                <TabBar.Item>
                    <Icon count={cart.count} as={Link} {...cart.link}>
                        <IconBag />
                    </Icon>
                </TabBar.Item>
            </TabBar>

            <style jsx global>{`
                .app__header__logo {
                    margin: 0;
                    padding: 0;
                    line-height: 0;
                }

                .app__header__logo__image {
                    max-height: 2.8rem;

                    @media(--large-screen) {
                        max-height: 3.5rem;
                    }
                }    

                @media(--small-screen-only) {
                    .app__header__menu,
                    .app__header__utilities__search,
                    .app__header__utilities__cart {
                        display: none;
                    }

                    .app__header {
                        grid-template-areas: "logo utilities";
                    }
                }

                @media(--medium-screen) {
                    .app__tab-bar {
                        display: none;
                    }
                }
            `}</style>
        </App>
    )
}
