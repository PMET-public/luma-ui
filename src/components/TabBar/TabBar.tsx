import React, { FunctionComponent, ReactElement } from 'react'
import Icon from '../Icon'
import { getbem } from '../../lib/helpers'

/**
 * TabBarLink
 */
type TabBarLink = {
    count?: number
    icon: string
    isActive?: boolean
    label: string
    src: string
}

export const TabBarLink: FunctionComponent<TabBarLink> = ({ 
    count, 
    icon, 
    isActive = false, 
    label, 
    src,
}) => (
    <a className={getbem('tab-bar-link', ['active', isActive])} 
        href={src}
    >
        <span className="tab-bar-link__icon">
            <Icon  name={icon} size={24} />
            {count ? (
                <div className={getbem('tab-bar-link__count', ['over', count > 99])}>
                    {count > 99 ? 99 : count}
                </div>
            ) : null}
        </span>
        
        <div className="tab-bar-link__label">{label}</div>
    </a>
)

export type TabBarProps = {
    children: ReactElement<TabBarLink> | Array<ReactElement<TabBarLink>> 
}

export const TabBar: FunctionComponent<TabBarProps> = ({ children }) => (
    <nav className="tab-bar">
        {children}
    </nav>
)
