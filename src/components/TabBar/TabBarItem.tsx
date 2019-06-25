import React, { FunctionComponent } from 'react'

export type TabBarItemProps = { 
    isActive?: boolean
}

export const TabBarItem: FunctionComponent<TabBarItemProps> = ({ isActive, children }) => (
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
