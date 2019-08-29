import React from 'react'
import { Component, Props } from '../../lib'
import { Root, Item, Icon } from './TabBar.styled'

import { IconProps } from '../Icon'

export type TabBarProps = {
    items: Array<
        Props<{
            active?: boolean
            icon: IconProps
        }>
    >
}

export const TabBar: Component<TabBarProps> = ({ items = [], ...props }) => {
    return (
        <Root {...props}>
            {items.map(({ icon, active = false, ...item }, index) => (
                <Item active={active} key={index} {...item}>
                    <Icon {...icon} />
                </Item>
            ))}
        </Root>
    )
}
