import React from 'react'
import { Container, Component, Element, Props, classes } from '../../lib'

import { useResize } from '../../hooks/useResize'
import { useTheme } from '../../theme'

import AppBar from '../../components/AppBar'
import Header from '../../components/Header'
import Icon, { IconProps } from '../../components/Icon'
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

    footer: {
        copyright: string
        menu?: Props[]
        social?: {
            facebook?: Props
            instragram?: Props
            pinterest?: Props
            twitter?: Props
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
    const { margin } = useTheme()

    return (
        <Element {...props} className={classes('app', props.className)}
            style={{
                height: vHeight,
            }}
        >
            <AppBar className="app__app-bar" 
                as="header" 
            >
                <Header className="app__app-bar__header"  
                    logo={{
                        ...logo,
                        svg: Logo,
                        className: classes(logo.className, 'app__app-bar__header__logo'),
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
                                className: classes(help.className, 'app__app-bar__header__utilities__help'), 
                            },
                            { 
                                ...myAccount,
                                className: classes(myAccount.className, 'app__app-bar__header__utilities__account'),
                            },
                            { 
                                ...search, 
                                className: classes(search.className, 'app__app-bar__header__utilities__search'),
                                icon: {
                                    svg: IconSearch,
                                    ...search.icon,
                                },
                            },
                            {
                                ...cart,
                                className: classes(cart.className, 'app__app-bar__header__utilities__cart'),
                                icon: {
                                    svg: IconBag,
                                    ...cart.icon,
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
            
            <TabBar  
                as="nav" 
                className="app__tab-bar"
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

            <style jsx global>{`
                .app {
                    display: grid;
                    grid-auto-columns: minmax(0, 1fr);
                    grid-template-rows: auto 1fr auto auto;
                }

                /** App Bar */
                .app__app-bar {
                    z-index: 2;
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
                    padding-top: ${margin};
                    position: relative;
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
                        margin: 1rem;
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
                
                /** TabBar */
                .app__tab-bar {
                    position: sticky;
                    bottom: 0;
                    z-index: 2;
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
