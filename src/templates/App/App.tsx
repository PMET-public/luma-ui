import React from 'react'
import { Container, Component, Element, Props, classes } from '../../lib'

import { useResize } from '../../hooks/useResize'

import AppBar from '../../components/AppBar'
import Header from '../../components/Header'
import Icon from '../../components/Icon'
import TabBar from '../../components/TabBar'
import Logo from '../../../public/images/luma.svg'
import Footer from '../../components/Footer'

import IconSearch from '@fortawesome/fontawesome-free/svgs/solid/search.svg'
import IconBag from '@fortawesome/fontawesome-free/svgs/solid/shopping-bag.svg'
import IconHome from '@fortawesome/fontawesome-free/svgs/solid/store.svg'
import IconAccount from '@fortawesome/fontawesome-free/svgs/solid/user.svg'
import IconTwitter from '@fortawesome/fontawesome-free/svgs/brands/twitter.svg'
import IconFacebook from '@fortawesome/fontawesome-free/svgs/brands/facebook.svg'
import IconInstagram from '@fortawesome/fontawesome-free/svgs/brands/instagram.svg'
import IconPinterest from '@fortawesome/fontawesome-free/svgs/brands/pinterest.svg'

export type AppProps = Props<{
    home: Props<{
        label?: string
    }>

    logo: Props<{
        title: string
    }>

    menu: Array<Props<{
        label: string
    }>>

    help?: Props<{
        label?: string
    }>

    myAccount: Props<{
        label?: string
        count?: number
    }>

    search: Props<{
        label?: string
    }>

    cart: Props<{
        count?: number
        label?: string
    }>

    footer: {
        copyright: string
        menu?: Array<Props<{ label: string }>>
        social?: {
            facebook?: Props<{ title: string }>
            instragram?: Props<{ title: string }>
            pinterest?: Props<{ title: string }>
            twitter?: Props<{ title: string }>
        }
    }
}>

export const App: Component<AppProps> = ({
    home,
    logo,
    menu,
    help,
    myAccount,
    search,
    cart,
    children,
    footer,
    ...props
}) => {
    const { vHeight } = useResize()

    return (
        <Element {...props} className={classes('app', props.className)}
            style={{
                ['--vHeight' as any]: `calc(${vHeight}px - 0rem)`,
            }}
        >
            <AppBar className="app__app-bar" 
                as="header" 
            >
                <Header className="app__app-bar__header"  
                    logo={{
                        className: 'app__app-bar__header__logo',
                        svg: Logo,
                        ...logo,
                    }}
                    menu={{ 
                        className: 'app__app-bar__header__menu', 
                        items: menu, 
                    }}
                    utilities={{
                        className: 'app__app-bar__header__utilities',
                        items: [
                            { 
                                ...help ,
                                className: 'app__app-bar__header__utilities__help', 
                            },
                            { 
                                ...myAccount,
                                className: 'app__app-bar__header__utilities__account',
                            },
                            { 
                                ...search, 
                                className: 'app__app-bar__header__utilities__search',
                                icon: {
                                    svg: IconSearch,
                                },
                            },
                            {
                                ...cart,
                                className: 'app__app-bar__header__utilities__cart',
                                icon: {
                                    svg: IconBag,
                                    count: 3,
                                },
                            },
                        ],
                    }}
                />
            </AppBar>
            
            <Container as="main" className="app__main">
                {children}
            </Container>

            <Footer as="footer" className="app__footer">
                {footer.menu && (
                    <div className="app__footer__menu">
                        {footer.menu.map(({ label, ...item }, index) => (
                            <Element className="app__footer__menu__link" 
                                key={index}
                                {...item}
                            >
                                {label}
                            </Element>
                        ))}
                    </div>
                )}

                {footer.social && (
                    <div className="app__footer__social">
                        {footer.social.pinterest && (
                            <Icon {...footer.social.pinterest}>
                                <IconPinterest />
                            </Icon>
                        )}

                        {footer.social.instragram && (
                            <Icon {...footer.social.instragram}>
                                <IconInstagram />
                            </Icon>
                        )}

                        {footer.social.facebook && (
                            <Icon {...footer.social.facebook}>
                                <IconFacebook />
                            </Icon>
                        )}

                        {footer.social.twitter && (
                            <Icon {...footer.social.twitter}>
                                <IconTwitter />
                            </Icon>
                        )}

                    </div>
                )}

                <div className="app__footer__copyright">
                    {footer.copyright}
                </div>
            </Footer>

            <TabBar as="nav" className="app__tab-bar">
                <TabBar.Item>
                    <Icon {...home} label={null}>
                        <IconHome />
                    </Icon>
                </TabBar.Item>

                <TabBar.Item>
                    <Icon {...myAccount} label={null}>
                        <IconAccount />
                    </Icon>
                </TabBar.Item>

                <TabBar.Item>
                    <Icon {...search} label={null}>
                        <IconSearch />
                    </Icon>
                </TabBar.Item>

                <TabBar.Item>
                    <Icon {...cart} label={null}>
                        <IconBag />
                    </Icon>
                </TabBar.Item>
            </TabBar>

            <style jsx global>{`
                .app {
                    display: grid;
                    grid-auto-columns: minmax(0, 1fr);
                    grid-template-rows: auto 1fr auto auto;
                    min-height: var(--vHeight);
                }
                
                .app__app-bar__header__logo {
                    margin: 0;
                    padding: 0;
                    line-height: 0;
                }

                .app__app-bar__header__logo svg {
                    height: 2.8rem;

                    @media(--large-screen) {
                        height: 3.5rem;
                    }
                }

                /** Main */
                .app__main {
                    box-sizing: border-box;
                }

                /** Footer */

                .app__footer {
                    & .footer__container {
                        display: grid;
                        filter: opacity(0.65);
                        grid-gap: 3rem;
                    }
                }

                .app__footer__menu {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: center;
                    text-align: center;
                    text-transform: uppercase;

                    & .app__footer__menu__link {
                        margin: 1rem 0.75rem;
                    }
                }

                .app__footer__social {
                    display: grid;
                    font-size: 2.4rem;
                    grid-auto-columns: max-content;
                    grid-auto-flow: column;
                    grid-auto-rows: max-content;
                    grid-gap: 2rem;
                    justify-content: center;
                }

                .app__footer__copyright {
                    text-align: center;
                    width: 100%;
                }
                

                @media(--small-screen-only) {
                    .app__app-bar__header__menu,
                    .app__app-bar__header__utilities__search,
                    .app__app-bar__header__utilities__cart {
                        display: none;
                    }

                    .app__app-bar__header {
                        grid-template-areas: "logo utilities";
                    }
                }

                @media(--medium-screen) {
                    .app__tab-bar {
                        display: none;
                    }
                }
            `}</style>
        </Element>
    )
}
