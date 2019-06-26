import React, { FunctionComponent } from 'react'

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
