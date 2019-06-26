import React, { FunctionComponent, ReactElement } from 'react'
import { TabBarItemProps } from './TabBarItem'
import { useTheme } from '../../hooks/useTheme'

export type TabBarProps = {
   children: ReactElement<TabBarItemProps> | Array<ReactElement<TabBarItemProps>>
}

export const TabBar: FunctionComponent<TabBarProps> = ({ 
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
