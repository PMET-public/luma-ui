import React, { FunctionComponent, ReactElement } from 'react'
// import Svg from 'react-svg'
import { getbem } from '../../lib/helpers'
import { useWheelEvent } from '../../hooks/useWheelEvent'

/**
 * Toolbar
 */
export type ToolbarProps = {
    children: ReactElement<ToolbarActionsProps> | Array<ReactElement<ToolbarActionsProps>>
    hideOnOffset?: number
    logoSrc: string
    storeName: string
    storeUrl: string
}

export const Toolbar: FunctionComponent<ToolbarProps> = ({
    children,
    hideOnOffset = 0,
    storeName,
    storeUrl,
    logoSrc,
}) => {
    const { scrollTop, deltaY } = useWheelEvent()
    const isScrolled = scrollTop > hideOnOffset
    const isHidden = hideOnOffset > 0 && scrollTop > hideOnOffset && deltaY > 0

    return (
        <div className={getbem('toolbar', ['hidden', isHidden], ['scrolled', isScrolled])}>
            <h1 className="toolbar__logo">
                <a href={storeUrl}>
                    <img className="toolbar__logo__image"
                        alt={storeName}
                        src={logoSrc} 
                    />
                </a>
            </h1>
            {children}
        </div>
    )
}
/**
 * ToolbarActions
 */
type ToolbarActionsProps = {
    type: 'primary' | 'secondary'
}

export const ToolbarActions: FunctionComponent<ToolbarActionsProps> = ({ children, type }) => (
    <nav className={getbem('toolbar-actions', type)}>
        {children}
    </nav>
)
