import React from 'react'
import { Container, Component, Props, Element, classes } from '../../lib'
import { useTheme } from '../../theme'

/**
 * AppBar
 */
export type AppBarProps = Props<{
    offset?: number
}>

export const AppBar: Component<AppBarProps> = ({
    children,
    ...props
}) => {
    const { colors } = useTheme()

    return (
        <Element {...props} className={classes('app-bar', props.className)}>
            <div className="app-bar__content">
                <Container>
                    {children}
                </Container>
            </div>

            <style jsx global>{`
                .app-bar__content {
                    align-items: center;
                    background-color: ${colors.surface};
                    box-sizing: border-box;
                    color: ${colors.onSurface};
                    display: flex;
                    padding: 1rem 0;
                    width: 100%;
                    z-index: 3;
                    box-shadow: inset 0 -0.1rem 0 rgba(0, 0, 0, 0.09), inset 0 -0.2rem 0 rgba(255, 255, 255, 0.09);   
                }
            `}</style>
        </Element>
    )
}
