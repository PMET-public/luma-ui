import React from 'react'
import { Component, Props, Element, classes } from '../../lib'
import { useTheme } from '../../theme'
import Icon, { IconProps } from '../Icon'

export type TabBarProps = Props<{
    items: Array<Props<{
        active?: boolean
        icon: IconProps
    }>>
}>

export const TabBar: Component<TabBarProps> = ({
    as: Wrapper = 'nav',
    items = [],
    ...props
}) => {
    const { colors } = useTheme()
    return (
        <Element {...props} className={classes('tab-bar', props.className)}>
            {items.map(({ icon, active = false, ...item }, index) => (
                <Element 
                    key={index} 
                    {...item} 
                    className={classes('tab-bar__item', ['--active', active])}
                >
                    <Icon {...icon} />
                </Element>
            ))}

            <style jsx global>{`
                .tab-bar {
                    background-color: ${colors.surface};
                    box-shadow: inset 0 0.1rem 0 rgba(0, 0, 0, 0.07), inset 0 0.2rem 0 rgba(255, 255, 255, 0.07);
                    color: ${colors.onSurface};
                    color: ${colors.onSurface};
                    display: grid;
                    grid-auto-flow: column;
                    padding: 1.3rem;
                    width: 100%;
                }

                .tab-bar__item {
                    align-items: center;
                    color: ${colors.primary};
                    display: flex;
                    flex-direction: column;
                    font-size: 2.3rem;
                    justify-content: center;
                    opacity: 0.5;

                    &.--active {
                        opacity: 1;
                    }
                }

                @supports(padding: max(0px)) {
                    .tab-bar {
                        padding-left: max(1.3rem, env(safe-area-inset-left));
                        padding-right: max(1.3rem, env(safe-area-inset-right));
                        padding-bottom: max(1.3rem, env(safe-area-inset-bottom));
                    }
                }
            `}</style>
        </Element>
    )
}
