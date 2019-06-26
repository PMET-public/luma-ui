import React, { FunctionComponent } from 'react'
import { useTheme } from '../../hooks/useTheme'

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
