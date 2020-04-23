import React from 'react'
import { Component, Props } from '../../lib'
import { Root, Logo, Menu, MenuWrapper, MenuItem, Utilities, UtilitiesItem, IconWrapper } from './Header.styled'
import { LogoSkeleton } from './Logo.skeleton'
import { MenuSkeleton } from './Menu.skeleton'
import Icon, { IconProps } from '../Icon'
import LogoImageSvg from '../../svgs/luma.svg'

export type HeaderProps = {
    loading?: boolean
    logo: Props<{
        loading?: boolean
        image?: any
    }>
    menu: {
        items?: Props<{
            active?: boolean
            text: string
        }>[]
    }
    utilities: {
        items?: Props<{
            active?: boolean
            text: string
            icon?: IconProps
        }>[]
    }
}

export const Header: Component<HeaderProps> = ({
    loading,
    logo: { image: logoImage, loading: logoLoading = loading, ...logo },
    menu: { items: menuItems, ...menu },
    utilities: { items: utilitiesItems, ...utilities },
    ...props
}) => {
    return (
        <Root {...props}>
            {/* Logo */}
            <Logo {...logo}>{logoImage ? <img {...logoImage} /> : logoLoading ? <LogoSkeleton /> : <LogoImageSvg />}</Logo>

            {/* Menu */}
            <Menu {...menu}>
                <MenuWrapper>
                    {loading ? (
                        <MenuSkeleton />
                    ) : (
                        menuItems?.map(({ active = false, text, ...menuItem }, index) => (
                            <MenuItem $active={active} key={index} {...menuItem}>
                                {text}
                            </MenuItem>
                        ))
                    )}
                </MenuWrapper>
            </Menu>

            {/* Utilities */}
            <Utilities {...utilities}>
                {utilitiesItems?.map(({ active = false, text, icon, ...utilitiesItem }, index) => (
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
