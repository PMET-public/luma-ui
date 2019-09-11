import React from 'react'
import { Component, Props } from '../../lib'
import { Root, Logo, Menu, MenuWrapper, MenuItem, Utilities, UtilitiesItem, IconWrapper } from './Header.styled'
import { ReactComponentLike } from 'prop-types'

import Icon, { IconProps } from '../Icon'
import Container from '../Container'

export type HeaderProps = {
    logo: Props<{
        svg: ReactComponentLike
    }>
    menu: {
        items: Props<{
            active?: boolean
            text: string
        }>[]
    }
    utilities: {
        items: Props<{
            active?: boolean
            text: string
            icon?: IconProps
        }>[]
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
                        <MenuItem $active={active} key={index} {...menuItem}>
                            {text}
                        </MenuItem>
                    ))}
                </MenuWrapper>
            </Menu>

            {/* Utilities */}
            <Utilities {...utilities}>
                {utilitiesItems.map(({ active = false, text, icon, ...utilitiesItem }, index) => (
                    <UtilitiesItem $active={active} $icon={!!icon} key={index} {...utilitiesItem}>
                        {icon ? (
                            <IconWrapper>
                                <Icon aria-label={text} {...icon} />
                            </IconWrapper>
                        ) : (
                            text
                        )}
                    </UtilitiesItem>
                ))}
            </Utilities>
        </Root>
    )
}
