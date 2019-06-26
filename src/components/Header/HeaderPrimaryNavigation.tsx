import React, { FunctionComponent } from 'react'
import { useTheme } from '../../hooks/useTheme'

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
