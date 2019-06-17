import React, { FunctionComponent, ReactElement } from 'react'
import { IconProps } from '../Icon'
import { ReactComponentLike } from 'prop-types'
import { getbem } from '../../lib/helpers'

export type TabBarProps = {
    routerLink?: ReactComponentLike
    items: Array<{
        isActive?: boolean
        icon: ReactElement<IconProps>
        route: any
    }>
}

export const TabBar: FunctionComponent<TabBarProps> = ({ 
    items, 
    routerLink: Link = ({ ...props }) => <a {...props} />,
}) => (
    <nav className="tab-bar">
        {items.map(({ isActive, icon, route }, i) => (
            <span className={getbem('tab-bar__item', ['active', !!isActive])} 
                key={`tab-bar__item--${i}`}
            >
                <Link {...route}>
                    {icon}
                </Link>
            </span>
        ))}
    </nav>
)
