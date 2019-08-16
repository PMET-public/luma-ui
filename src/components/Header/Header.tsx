import React from 'react'
import { Component, Props, Element, classNames } from '../../lib'
import defaultClasses from './Header.css'
import { ReactComponentLike } from 'prop-types'

import Icon, { IconProps } from '../Icon'

export type HeaderProps = Props<{
    classes?: typeof defaultClasses
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
    classes,
    logo: {
        svg: LogoSvg,
        ...logo
    },
    menu,
    utilities,
    ...props
}) => {
    const styles = { ...defaultClasses, ...classes }

    return (
        <Element {...props} className={styles.root}>
            {/* Logo */}
            <Element 
                {...logo} 
                className={styles.logo}
            >
                <LogoSvg />
            </Element>

            {/* Menu */}
            <div className={styles.menu}>
                <div className={styles.menuWrapper}>
                    {menu.items.map(({active = false, ...menuItem}, index) => (
                        <Element 
                            {...menuItem} 
                            key={index} 
                            className={classNames([styles.active, active])}
                        />
                    ))}
                </div>
            </div>

            {/* Utilities */}
            <div className={styles.utilities}>
                {utilities.items.map(({active = false, text, icon, ...utilitiesItem}, index) => (
                    <Element 
                        {...utilitiesItem}
                        className={classNames(
                            styles.utilitiesItem, 
                            [styles.icon, !!icon], 
                            [styles.active, active]
                        )}
                        key={index} 
                    >
                    {icon ? (
                            <Icon 
                                classes={{
                                    root: styles.icon,
                                }} 
                                aria-label={text}
                                {...icon}
                            />
                        ) : text}
                </Element>
                ))}
            </div>
        </Element>
    )
}
