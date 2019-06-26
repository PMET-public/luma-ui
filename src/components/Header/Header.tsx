import React, { FunctionComponent } from 'react'
import { useTheme } from '../../hooks/useTheme'

export type HeaderProps = { }

export const Header: FunctionComponent<HeaderProps> = ({ children }) => {
    const { grid } = useTheme()

    return (
        <div className="header">
            {children}

            <style jsx>{`
                .header {
                    ${grid({ gap: '3rem' })}
                    align-items: center;
                    grid-template-areas: "logo secondaryNav primaryNav";
                    grid-template-columns: auto 1fr auto;
                    width: 100%;
                }
            `}</style>
        </div>
    )
}

export type HeaderLogoProps = { }

export const HeaderLogo: FunctionComponent<HeaderLogoProps> = ({ children }) => (
    <div className="header-logo">
        {children}

        <style jsx>{`
            .header-logo {
                align-items: center;
                display: flex;
                grid-area: logo;
            }
        `}</style>
    </div>
)

export type HeaderPrimaryNavigation = { }

export const HeaderPrimaryNavigation: FunctionComponent<HeaderPrimaryNavigation> = ({ children }) => {
    const { grid } = useTheme()

    return (
        <div className="header-primary-navigation">
            {children}

            <style jsx>{`
                .header-primary-navigation {
                    ${grid({ fluid: true, gap: '1rem' })}
                    font-size: 2.5rem;
                    grid-area: primaryNav;
                    justify-content: flex-end;
                }
            `}</style>
        </div>
    )
}

export type HeaderSecondaryNavigation = { }

export const HeaderSecondaryNavigation: FunctionComponent<HeaderSecondaryNavigation> = ({ children }) => {
    const { grid, colors, breakpoints } = useTheme()
    
    return (
        <div className="header-secondary-navigation">
            {children}

            <style jsx>{`
                .header-secondary-navigation {
                    ${grid({ fluid: true, gap: '3rem' })}
                    -webkit-overflow-scrolling: touch;
                    display: none;
                    font-size: 1.4rem;
                    grid-area: secondaryNav;
                    overflow-x: scroll;
                    position: relative;
                }

                @media (${breakpoints.medium}) {
                    .header-secondary-navigation {
                        display: grid;
                        justify-content: center;
                    }
                }

                .header-secondary-navigation::-webkit-scrollbar {
                    display: none;
                }

                .header-secondary-navigation :global([href]) {
                    --color: ${colors.primary};
                    border-bottom: 0.1rem solid transparent;
                    color: var(--color);
                    padding-top: 0.1rem;
                    text-decoration: none;
                    transition: border 500ms ease;
                }

                .header-secondary-navigation :global([href]:hover) {
                    border-color: var(--color);
                }

            `}</style>
        </div>
    )
}
