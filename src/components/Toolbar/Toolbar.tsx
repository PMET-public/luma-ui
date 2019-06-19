import React, { FunctionComponent, useEffect, useState } from 'react'
import { getbem } from '../../lib/helpers'
import { useScroll } from '../../hooks/useScroll'

/**
 * ToolBar
 */
export type ToolBarProps = {
    hideOnOffset?: number
}

export const ToolBar: FunctionComponent<ToolBarProps> = ({
    children,
    hideOnOffset = 0,
}) => {
    const { scrollY } = useScroll()
    const [lastScrollY, setlastScrollY] = useState(0)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isHidden, setIsHidden] = useState(false)

    useEffect(() => {
        const deltaY = scrollY - lastScrollY
        const isScrolled = scrollY > hideOnOffset
        setIsScrolled(isScrolled)
        setIsHidden(hideOnOffset > 0 && isScrolled && (deltaY > 0))    
        setlastScrollY(scrollY)
    }, [scrollY])
    
    return (
        <div className={getbem('tool-bar', ['hidden', isHidden], ['scrolled', isScrolled])}>
            <div className="tool-bar__content">
                {children}
            </div>
        </div>
    )
}
