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
    const { grid, colors } = useTheme()
    return (
        <TabBar {...props} className={classes('tab-bar', props.className)}>
            {children}

            <style jsx global>{`
                .tab-bar {
                    ${grid({ auto: true })}
                    background-color: ${colors.translucentSurface};
                    color: ${colors.onTranslucentSurface};
                    border-top: 0.1rem solid #eee;
                    bottom: 0;
                    color: ${colors.onSurface};
                    left: 0;
                    padding: 1.3rem;
                    position: fixed;
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
    return (
        <TabBarItem {...props} className={classes('tab-bar-item', props.className, ['--active', isActive])}>
            {children}
            
            <style jsx global>{`
                .tab-bar-item {
                    align-items: center;
                    display: flex;
                    flex-direction: column;
                    font-size: 2.3rem;
                    justify-content: center;
                    filter: contrast(0%);

                    &.--active {
                        filter: contrast(100%);
                    }
                }

                a {
                    text-decoration: none;
                }
            `}</style>
        </TabBarItem>
    )
}
