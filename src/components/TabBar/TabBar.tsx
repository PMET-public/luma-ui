import React, { FunctionComponent } from 'react'
import { Root, Item, Icon } from './TabBar.styled'

import { IconProps } from '../Icon'

export type TabBarProps = {
    items: Array<{
        active?: boolean
        icon: IconProps
    }>
}

export const TabBar: FunctionComponent<TabBarProps> = ({ items = [], ...props }) => {
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
