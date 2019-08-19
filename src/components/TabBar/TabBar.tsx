import React from 'react'
import { Component, Props, Element, classNames } from '../../lib'
import styles from './TabBar.css'

import useStyles from 'isomorphic-style-loader/useStyles'

import Icon, { IconProps } from '../Icon'

export type TabBarProps = Props<{
    items: Array<Props<{
        active?: boolean
        icon: IconProps
    }>>
}>

export const TabBar: Component<TabBarProps> = ({
    items = [],
    ...props
}) => {
    useStyles(styles)
    
    return (
        <Element className={styles.root} {...props}>
            {items.map(({ icon, active = false, ...item }, index) => (
                <Element 
                    className={classNames(styles.item, [styles.active, active])}
                    key={index} 
                    {...item} 
                >
                    <Icon {...icon} />
                </Element>
            ))}
        </Element>
    )
}
