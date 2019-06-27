import React, { FunctionComponent } from 'react'
import { useTheme } from '../../hooks/useTheme'

export type HeaderProps = { }

export type HeaderLogoProps = { }

export type HeaderMenuProps = { }

export type HeaderUtilitiesProps = { }

type CompoundComponent = {
    Logo: FunctionComponent<HeaderLogoProps>
    Menu: FunctionComponent<HeaderMenuProps>
    Utilities: FunctionComponent<HeaderUtilitiesProps>
}

export const Header: FunctionComponent<HeaderProps> & CompoundComponent = ({ children }) => {
    const { colors, breakpoints } = useTheme()

    return (
        <div className="header">
            {children}

            <style jsx>{`
                .header {
                    display: grid;
                    grid-gap: 3rem;
                    align-items: center;
                    font-size: 1.4rem;
                    grid-template-areas: "logo utilities"
                                         "navigation navigation";
                    width: 100%;
                    grid-template-columns: auto;
                    grid-template-rows: auto;
                }

                @media (${breakpoints.large}) {
                    .header {
                        grid-template-areas: "logo navigation utilities";
                        grid-template-columns: auto 1fr auto;
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
        </div>
    )
}

Header.Logo = ({ children }) => (
    <div className="header-logo">
        {children}

        <style jsx>{`
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
    </div>
)

Header.Menu = ({ children }) => {
    const { grid } = useTheme()
     
    return (
        <div className="header-menu">
            <div className="header-menu__content">
                {children}
            </div>

            <style jsx>{`
                .header-menu {
                    -webkit-overflow-scrolling: touch;
                    grid-area: navigation;
                    overflow-x: auto;
                    text-align: center;
                }

                .header-menu::-webkit-scrollbar {
                    display: none;
                }

                .header-menu__content {
                    ${grid({ fluid: true, gap: '3rem', inline: true })}
                    text-align: initial;
                }

            `}</style>
        </div>
    )
}

Header.Utilities = ({ children }) => {
    const { grid } = useTheme()

    return (
        <div className="header-utilities">
            {children}

            <style jsx>{`
                .header-utilities {
                    ${grid({ fluid: true, gap: '2.5rem' })}
                    align-items: center;
                    grid-area: utilities;
                    justify-content: flex-end;
                }
            `}</style>
        </div>
    )
}
