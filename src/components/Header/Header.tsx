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
