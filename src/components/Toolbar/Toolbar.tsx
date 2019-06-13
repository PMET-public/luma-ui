import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react'
// import Svg from 'react-svg'
import { getbem } from '../../lib/helpers'
import { useScroll } from '../../hooks/useScroll'

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
    const { scrollY } = useScroll()
    const [lastScrollY, setlastScrollY] = useState(0)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isHidden, setIsHidden] = useState(false)

    useEffect(() => {
        const deltaY = scrollY - lastScrollY
        setIsScrolled(scrollY > hideOnOffset)
        setIsHidden(hideOnOffset > 0 && scrollY > hideOnOffset && (deltaY > 0))    
        setlastScrollY(scrollY)
    }, [scrollY])
    
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
