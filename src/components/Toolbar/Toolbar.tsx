import React, { FunctionComponent, ReactElement } from 'react'
import Svg from 'react-svg'
import Icon from '../Icon'
import { getbem } from '../../lib/helpers'

/**
 * Toolbar
 */
export type ToolbarProps = {
    storeName: string
    storeUrl: string
    logoSrc: string
}

export const Toolbar: FunctionComponent<ToolbarProps> = ({
    children,
    storeName,
    storeUrl,
    logoSrc,
}) => (
    <div className="toolbar">
        <h1 className="toolbar__logo" aria-label={storeName}>
            <a href={storeUrl}>
                <Svg className="toolbar__logo__image"
                    src={logoSrc} 
                    wrapper="span"
                />
            </a>
        </h1>

        {children}
    </div>
)

/**
 * ToolbarLink
 */
type ToolbarLinkProps = {
    count?: number
    icon?: string
    isActive?: boolean
    label: string
    src: string
}

export const ToolbarLink: FunctionComponent<ToolbarLinkProps> = ({ 
    count, 
    icon, 
    isActive = false, 
    label, 
    src,
}) => (
    <a className={getbem('toolbar-link', ['active', isActive])} 
        href={src}
    >
        { icon ? (
            <span className="toolbar-link__icon">
                <Icon  name={icon} size={24} />
                {count ? (
                    <div className={getbem('toolbar-link__count', ['over', count > 99])}>
                        {count > 99 ? 99 : count}
                    </div>
                ) : null}
            </span>
        ) : null }
        
        <div className="toolbar-link__label">{label}</div>
    </a>
)

/**
 * ToolbarActions
 */
type ToolbarActionsProps = {
    type: 'primary' | 'secondary' | 'nav'
    children: ReactElement<ToolbarLinkProps> | Array<ReactElement<ToolbarLinkProps>>
}

export const ToolbarActions: FunctionComponent<ToolbarActionsProps> = ({ children, type }) => (
    <nav className={getbem('toolbar-actions', type)}>
        {children}
    </nav>
)
