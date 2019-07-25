import React, { useEffect, useState } from 'react'
import { useScroll } from '../../hooks/useScroll'
import { useTheme } from '../../theme'
import { Component, Props, Element, classes } from '../../lib'
import Container from '../Container'

/**
 * AppBar
 */
export type AppBarProps = Props<{
    hideOnOffset?: number
}>

export const AppBar: Component<AppBarProps> = ({
    children,
    hideOnOffset = 0,
    ...props
}) => {
    const { colors } = useTheme()
    const { scrollY } = useScroll()
    const [lastScrollY, setlastScrollY] = useState(0)
    const [isHidden, setIsHidden] = useState(false)

    useEffect(() => {
        const deltaY = scrollY - lastScrollY
        const isScrolled = scrollY > hideOnOffset
        setIsHidden(hideOnOffset > 0 && isScrolled && (deltaY > 0))    
        setlastScrollY(scrollY) 
    }, [scrollY])
    
    return (
        <Element {...props} className={classes('app-bar', props.className, ['--hidden', isHidden])}>
            <div className="app-bar__content">
                <Container>
                    {children}
                </Container>
            </div>

            <style jsx global>{`
                .app-bar {
                    align-items: center;
                    background-color: ${colors.surface};
                    box-sizing: border-box;
                    color: ${colors.onSurface};
                    display: flex;
                    padding: 1rem 0;
                    position: sticky;
                    top: 0;
                    transition: transform 402ms ease, opacity 305ms ease;
                    width: 100%;
                    z-index: 3;
                    box-shadow: inset 0 -0.1rem 0 rgba(0, 0, 0, 0.09), inset 0 -0.2rem 0 rgba(255, 255, 255, 0.09);

                    &.--hidden {
                        opacity: 0;
                        transform: translateY(-100%);
                    }
                }

                .app-bar__content {
                    display: flex;   
                    align-items: center;
                    width: 100%;
                }
            `}</style>
        </Element>
    )
}
