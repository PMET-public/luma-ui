import React, { FunctionComponent } from 'react'
import Icon from '../Icon'
import { getbem } from '../../lib/helpers'

export type TabBarProps = {
    items: Array<{
        count?: number
        icon: string
        isActive?: boolean
        label: string
        src: string
    }>
}

export const TabBar: FunctionComponent<TabBarProps> = ({ items }) => (
    <nav className="tab-bar">
        {items.map(({ count, icon, isActive, label, src }, i) => (
            <a className={getbem('tab-bar__link', ['active', !!isActive])}
                href={src}
            >
                <Icon name={icon} size={24} label={label} count={count} />
            </a>
        ))}
    </nav>
)
