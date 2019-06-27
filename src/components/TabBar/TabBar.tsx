import React, { FunctionComponent, ReactElement } from 'react'
import { useTheme } from '../../hooks/useTheme'

export type TabBarProps = {
   children: ReactElement<TabBarItemProps> | Array<ReactElement<TabBarItemProps>>
}

export type TabBarItemProps = { 
    isActive?: boolean
}

type CompoundComponent = {
    Item: FunctionComponent<TabBarItemProps>
}

export const TabBar: FunctionComponent<TabBarProps> & CompoundComponent = ({ 
    children, 
}) => {
    const { grid, colors } = useTheme()
    return  (
        <nav className="tab-bar">
            {children}

            <style jsx>{`
                    .tab-bar {
                        ${grid({ auto: true })}
                        background-color: ${colors.translucentSurface};
                        color: ${colors.onTranslucentSurface};
                        border-top: 0.1rem solid #eee;
                        bottom: 0;
                        color: ${colors.onSurface};
                        left: 0;
                        padding-bottom: 1.6rem;
                        padding-top: 1rem;
                        position: fixed;
                        right: 0;
                    }
            `}</style>
        </nav>
    )
}

TabBar.Item = ({ isActive, children }) => (
    <span className="tab-bar-item">
        {children}

        <style jsx>{`
            .tab-bar-item {
                align-items: center;
                display: flex;
                filter: contrast(${ isActive ? '100%' : '0%' });
                flex-direction: column;
                font-size: 2.4rem;
                justify-content: center;
            }

            a {
                text-decoration: none;
            }
        `}</style>
    </span>
)
