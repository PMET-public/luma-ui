import React from 'react'
import { Component, Props, Element, classNames } from '../../lib'
import defaultClasses from './TabBar.css'

import Icon, { IconProps } from '../Icon'

export type TabBarProps = Props<{
    classes?: typeof defaultClasses
    items: Array<Props<{
        active?: boolean
        icon: IconProps
    }>>
}>

export const TabBar: Component<TabBarProps> = ({
    classes,
    items = [],
    ...props
}) => {
    const styles = { ...defaultClasses, ...classes }

    return (
        <Element {...props} className={styles.root}>
            {items.map(({ icon, active = false, ...item }, index) => (
                <Element 
                    key={index} 
                    {...item} 
                    className={classNames(styles.item, [styles.active, active])}
                >
                    <Icon {...icon} />
                </Element>
            ))}
        </Element>
    )
}
