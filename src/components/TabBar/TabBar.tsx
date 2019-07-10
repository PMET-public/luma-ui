import React, { ReactElement } from 'react'
import { Component, classes } from '../../lib'
import { useTheme } from '../../theme'

export type TabBarProps = {
    children: ReactElement<TabBarItemProps> | Array<ReactElement<TabBarItemProps>>
}

export type TabBarItemProps = {
    isActive?: boolean
}

type CompoundComponent = {
    Item: Component<TabBarItemProps>
}

export const TabBar: Component<TabBarProps> & CompoundComponent = ({
    as: TabBar = 'nav',
    children,
    ...props
}) => {
    const { colors } = useTheme()
    return (
        <TabBar {...props} className={classes('tab-bar', props.className)}>
            {children}

            <style jsx global>{`
                .tab-bar {
                    background-color: ${colors.surface};
                    bottom: 0;
                    box-shadow: inset 0 0.1rem 0 rgba(0, 0, 0, 0.07), inset 0 0.2rem 0 rgba(255, 255, 255, 0.07);
                    color: ${colors.onSurface};
                    color: ${colors.onSurface};
                    display: grid;
                    grid-auto-flow: column;
                    left: 0;
                    padding: 1.3rem;
                    position: sticky;
                    right: 0;
                }

                @supports(padding: max(0px)) {
                    .tab-bar {
                        padding-left: max(1.3rem, env(safe-area-inset-left));
                        padding-right: max(1.3rem, env(safe-area-inset-right));
                        padding-bottom: max(1.3rem, env(safe-area-inset-bottom));
                    }
                }
            `}</style>
        </TabBar>
    )
}

TabBar.Item = ({ 
    as: TabBarItem = 'span',
    isActive = false, 
    children,
    ...props
}) => {
    const { colors } = useTheme()
    return (
        <TabBarItem {...props} className={classes('tab-bar-item', props.className, ['--active', isActive])}>
            {children}
            
            <style jsx global>{`
                .tab-bar-item {
                    align-items: center;
                    color: ${colors.primary};
                    display: flex;
                    flex-direction: column;
                    font-size: 2.3rem;
                    justify-content: center;
                    opacity: 0.5;

                    & a {
                        color: inherit;
                    }

                    &.--active {
                        opacity: 1;
                    }
                }

                a {
                    text-decoration: none;
                }
            `}</style>
        </TabBarItem>
    )
}
