import React, { FunctionComponent, ReactElement } from 'react'
import Link from '../Link'
import { IconProps } from '../Icon'
import { getbem } from '../../lib/helpers'

export type TabBarProps = {
    items: Array<{
        icon: ReactElement<IconProps>
        isActive?: boolean
        link: any
    }>
}

export const TabBar: FunctionComponent<TabBarProps> = ({ 
    items, 
}) => (
    <nav className="tab-bar">
        {items.map(({ isActive, icon, link }, i) => (
            <span className={getbem('tab-bar__item', ['active', !!isActive])} 
                key={`tab-bar__item--${i}`}
            >
                <Link {...link}>
                    {icon}
                </Link>
            </span>
        ))}
    </nav>
)
