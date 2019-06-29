import React from 'react'
import { Component, classes } from '../../lib'
import { useTheme } from '../../theme'

export type HeaderProps = {}

export type HeaderLogoProps = {}

export type HeaderMenuProps = {}

export type HeaderUtilitiesProps = {}

type CompoundComponent = {
    Logo: Component<HeaderLogoProps>
    Menu: Component<HeaderMenuProps>
    Utilities: Component<HeaderUtilitiesProps>
}

export const Header: Component<HeaderProps> & CompoundComponent = ({
    as: Header = 'div',
    children,
    ...props
}) => {
    const { colors } = useTheme()

    return (
        <Header {...props} className={classes('header', props.className)}>
            {children}

            <style jsx global>{`
                .header {
                    display: grid;
                    grid-gap: 1rem 2rem;
                    align-items: center;
                    font-size: 1.4rem;
                    grid-template-areas: "logo utilities"
                                        "navigation navigation";
                    width: 100%;
                    grid-template-columns: auto;
                    grid-template-rows: auto;

                    @media (--medium-screen) {
                        grid-template-areas: "logo navigation utilities";
                        
                        & :global(.header-menu) {
                            text-align: center;
                        }
                    }
                }

                .header :global(a) {
                    --color: ${colors.primary};
                    border-bottom: 0.1rem solid transparent;
                    color: var(--color);
                    padding-top: 0.1rem;
                    text-decoration: none;
                    transition: border 500ms ease;
                }

                .header :global(a:hover) {
                    border-color: var(--color);
                }

                .header :global(.icon) {
                    font-size: 2.4rem;
                }

                
            `}</style>
        </Header>
    )
}

Header.Logo = ({
    as: HeaderLogo = 'div',
    className,
    children,
    ...props
}) => (
        <HeaderLogo {...props} className={classes('header-logo', className)}>
            {children}

            <style jsx global>{`
            .header-logo {
                align-items: center;
                display: flex;
                grid-area: logo;
            }

            .header-logo :global(a) {
                border: 0 none !important;
                text-decoration: none !important;
            }
        `}</style>
        </HeaderLogo>
    )

Header.Menu = ({
    as: HeaderMenu = 'div',
    children,
    className,
    ...props
}) => {
    const { grid } = useTheme()

    return (
        <HeaderMenu {...props} className={classes('header-menu', className)}>
            <div className="header-menu__content">
                {children}
            </div>

            <style jsx global>{`
                .header-menu {
                    -webkit-overflow-scrolling: touch;
                    grid-area: navigation;
                    overflow-x: auto;
                }

                .header-menu::-webkit-scrollbar {
                    display: none;
                }

                .header-menu__content {
                    ${grid({ fluid: true, inline: true })}
                    text-align: initial;
                    justify-items: center;
                    white-space: nowrap;
                    display: inline-grid;                  
                }

            `}</style>
        </HeaderMenu>
    )
}

Header.Utilities = ({
    as: HeaderUtilities = 'div',
    children,
    className,
    ...props
}) => {
    const { grid } = useTheme()

    return (
        <HeaderUtilities className={classes('header-utilities', className)} {...props}>
                {children}

            <style jsx global>{`
                .header-utilities {
                    ${grid({ fluid: true })}
                    align-items: center;
                    grid-area: utilities;
                    justify-content: flex-end;
                }
            `}</style>
        </HeaderUtilities>
    )
}
