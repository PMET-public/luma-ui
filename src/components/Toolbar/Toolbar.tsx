import React, { FunctionComponent, useEffect, useState } from 'react'
import { getbem } from '../../lib/helpers'
import { useScroll } from '../../hooks/useScroll'

/**
 * Toolbar
 */
export type ToolbarProps = {
    hideOnOffset?: number
}

export const Toolbar: FunctionComponent<ToolbarProps> = ({
    children,
    hideOnOffset = 0,
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
            <div className="toolbar__content">
                {children}
            </div>
        </div>
    )
}
