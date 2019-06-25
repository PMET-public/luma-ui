import React, { FunctionComponent, useEffect, useState } from 'react'
import { useScroll } from '../../hooks/useScroll'
import { useTheme } from '../../hooks/useTheme'

/**
 * AppBar
 */
export type AppBarProps = {
    hideOnOffset?: number
}

export const AppBar: FunctionComponent<AppBarProps> = ({
    children,
    hideOnOffset = 0,
}) => {
    const { padding, colors } = useTheme()
    const { scrollY } = useScroll()
    const [lastScrollY, setlastScrollY] = useState(0)
    // const [isScrolled, setIsScrolled] = useState(false)
    const [isHidden, setIsHidden] = useState(false)

    useEffect(() => {
        const deltaY = scrollY - lastScrollY
        const isScrolled = scrollY > hideOnOffset
        // setIsScrolled(isScrolled)
        setIsHidden(hideOnOffset > 0 && isScrolled && (deltaY > 0))    
        setlastScrollY(scrollY) 
    }, [scrollY])
    
    return (
        <div className="app-bar">
            <div className="app-bar__content">
                {children}
            </div>

            <style jsx>{`
                .app-bar {
                    background-color: ${colors.surface};
                    box-sizing: border-box;
                    color: ${colors.onSurface};
                    min-height: 6rem;
                    opacity: ${isHidden ? 0 : 1};
                    padding: ${padding};
                    position: sticky;
                    top: 0;
                    transform: translateY(${isHidden ? '-100%' : 0});
                    transition: transform 402ms ease, opacity 305ms ease;
                    width: 100%;
                    z-index: 3;
                }

                .app-bar__content {
                    display: flex;   
                    align-items: center;
                }
            `}</style>
        </div>
    )
}
