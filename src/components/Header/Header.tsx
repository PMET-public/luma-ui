import React from 'react'
import { Component, Props, Element, classNames } from '../../lib'
import styles from './Header.css'
import { ReactComponentLike } from 'prop-types'

import useStyles from 'isomorphic-style-loader/useStyles'

import Icon, { IconProps } from '../Icon'

export type HeaderProps = Props<{
    logo: Props<{
        svg: ReactComponentLike
    }>
    menu: Props<{
        items: Array<Props<{
            active?: boolean
        }>>
    }>
    utilities: Props<{
        items: Array<Props<{
            active?: boolean
            text: string
            icon?: IconProps
        }>>
    }>
}>

export const Header: Component<HeaderProps> = ({
    logo: {
        svg: LogoSvg,
        ...logo
    },
    menu: {
        items: menuItems,
        ...menu
    },
    utilities: {
        items: utilitiesItems,
        ...utilities
    },
    ...props
}) => {
    useStyles(styles)

    return (
        <Element className={styles.root} {...props}>

            {/* Logo */}
            <Element
                className={styles.logo}
                {...logo}
            >
                <LogoSvg />
            </Element>

            {/* Menu */}
            <div className={styles.menu} {...menu}>
                <div className={styles.menuWrapper}>
                    {menuItems.map(({ active = false, ...menuItem }, index) => (
                        <Element
                            key={index}
                            className={classNames([styles.active, active])}
                            {...menuItem}
                        />
                    ))}
                </div>
            </div>

            {/* Utilities */}
            <div className={styles.utilities} {...utilities}>
                {utilitiesItems.map(({ active = false, text, icon, ...utilitiesItem }, index) => (
                    <Element
                        className={classNames(
                            styles.utilitiesItem,
                            [styles.icon, !!icon],
                            [styles.active, active]
                        )}
                        key={index}
                        {...utilitiesItem}
                    >
                        {icon ? (
                            <Icon
                                aria-label={text}
                                className={styles.icon}
                                {...icon}
                            />
                        ) : text}
                    </Element>
                ))}
            </div>
        </Element>
    )
}
