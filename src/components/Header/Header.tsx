import React from 'react'
import { Component } from '../../lib'
import { Root, Logo, Menu, MenuWrapper, MenuItem, Utilities, UtilitiesItem, Icon } from './Header.styled'
import { ReactComponentLike } from 'prop-types'

import { IconProps } from '../Icon'

export type HeaderProps = {
    logo: {
        svg: ReactComponentLike
    }
    menu: {
        items: Array<{
            active?: boolean
            text: string
        }>
    }
    utilities: {
        items: Array<{
            active?: boolean
            text: string
            icon?: IconProps
        }>
    }
}
export const Header: Component<HeaderProps> = ({
    logo: { svg: LogoSvg, ...logo },
    menu: { items: menuItems, ...menu },
    utilities: { items: utilitiesItems, ...utilities },
    ...props
}) => {
    return (
        <Root {...props}>
            {/* Logo */}
            <Logo {...logo}>
                <LogoSvg />
            </Logo>

            {/* Menu */}
            <Menu {...menu}>
                <MenuWrapper>
                    {menuItems.map(({ active = false, text, ...menuItem }, index) => (
                        <MenuItem {...menuItem}>{text}</MenuItem>
                    ))}
                </MenuWrapper>
            </Menu>

            {/* Utilities */}
            <Utilities {...utilities}>
                {utilitiesItems.map(({ active = false, text, icon, ...utilitiesItem }, index) => (
                    <UtilitiesItem key={index} {...utilitiesItem}>
                        {icon ? <Icon aria-label={text} {...icon} /> : text}
                    </UtilitiesItem>
                ))}
            </Utilities>
        </Root>
    )
}
