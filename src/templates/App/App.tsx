import React, { FunctionComponent } from 'react'
import AppBar from '../../components/AppBar'
import Header from '../../components/Header'
import Icon from '../../components/Icon'
import Dropdown from '../../components/Dropdown'
import TabBar from '../../components/TabBar'
import Logo from '../../../public/images/new-luma.svg'
import Link, { LinkRoute } from '../../components/Link'
import Image from '../../components/Image'

import IconSearch from '../../components/Icon/svgs/thin/magnifier.svg'
import IconBag from '../../components/Icon/svgs/thin/bag.svg'
import IconHome from '../../components/Icon/svgs/thin/store.svg'
import IconHeart from '../../components/Icon/svgs/thin/heart.svg'

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
        menu?: Array<{ label: string, link: LinkRoute }> 
    }>

    help?: {
        label?: string
        link: LinkRoute
    }

    myAccount: {
        label?: string
        link: LinkRoute
        menu?: Array<{ label: string, link: LinkRoute }>
    }

    search: {
        label?: string
        link: LinkRoute
    }

    favorites: {
        count?: number
        label?: string
        link: LinkRoute
    }

    cart: {
        count?: number
        label?: string
        link: LinkRoute
    }
}

export const App: FunctionComponent<AppProps> = ({ 
    cart,
    children,
    favorites,
    help,
    home,
    logo, 
    menu,
    myAccount,
    search,
}) => {
    return (
        <div className="app">
            <AppBar>
                <Header>
                    <Header.Logo>
                        <Link {...logo.link }>
                            <h1 className="app__logo">
                                {logo.src ? (
                                    <Image src={logo.src} alt={logo.title} />
                                ) : (
                                    <Logo height="30" aria-label={logo.title} />
                                )}
                            </h1>
                        </Link>
                    </Header.Logo>

                    {menu && menu.length > 0 && (
                        <Header.Menu>
                            {menu.map((item, key) => item.menu && item.menu.length > 0 ? (
                                <Dropdown key={key}>
                                    <Dropdown.Label>
                                        <Link {...item.link}>
                                            {item.label}
                                        </Link>
                                    </Dropdown.Label>
                                    <Dropdown.Content isMenu={true}>
                                        {item.menu.map((submenu, sk) => (
                                            <Link {...submenu.link}>
                                                {submenu.label}
                                            </Link>
                                        ))}
                                    </Dropdown.Content>
                                </Dropdown>
                            ) : (
                                <Link key={key} {...item.link}>{item.label}</Link>
                            ))}
                        </Header.Menu>
                    )}             
                         
                    <Header.Utilities>
                        {help && <Link {...help.link}>
                            {help.label || 'Help'}
                        </Link>}
                        
                        {myAccount.menu && myAccount.menu.length ? (
                            <Dropdown>
                                <Dropdown.Label>
                                    <Link {...myAccount.link}>
                                        {myAccount.label || 'My Account'}
                                    </Link>
                                </Dropdown.Label>
                                    <Dropdown.Content isMenu={true}>
                                        {myAccount.menu.map((item, key) => (
                                            <Link {...item.link} key={key}>
                                                {item.label}
                                            </Link>
                                        ))}
                                    </Dropdown.Content>
                            </Dropdown>
                        ) : (
                            <Link {...myAccount.link}>
                                {myAccount.label || 'My Account'}
                            </Link>
                        )}

                        <Icon as={Link} {...search.link}>
                            <IconSearch arial-label={search.label || 'Search'} />
                        </Icon>
                    
                        <Icon count={cart.count} as={Link} {...cart.link}>
                            <IconBag aria-label={cart.label || 'My Bag'} />
                        </Icon>
                    </Header.Utilities>
                </Header>
            </AppBar>
            
            {children}

            <TabBar>
                <TabBar.Item isActive={true}>
                    <Icon label={home.label || 'Home'} as={Link} {...home.link}>
                        <IconHome />
                    </Icon>
                </TabBar.Item>

                <TabBar.Item>
                    <Icon label={favorites.label || 'Favorites'} count={favorites.count} as={Link} {...favorites.link}>
                        <IconHeart />
                    </Icon>
                </TabBar.Item>

                <TabBar.Item>
                    <Icon label={search.label || 'Search'} as={Link} {...search.link}>
                        <IconSearch />
                    </Icon>
                </TabBar.Item>

                <TabBar.Item>
                    <Icon label={cart.label || 'Bag'} count={cart.count} as={Link} {...cart.link}>
                        <IconBag />
                    </Icon>
                </TabBar.Item>
            </TabBar>
            
            <style jsx>{`
                .app__logo {
                    margin: 0;
                    padding: 0;
                }

                .app__logo :global(.image__img) {
                    max-height: 3.5rem;
                }
            `}</style>
        </div>
    )
}
