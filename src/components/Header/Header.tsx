import React from 'react'
import { Component, Props, Element, classes } from '../../lib'
import { useTheme } from '../../theme'
import { ReactComponentLike } from 'prop-types'
import Icon, { IconProps } from '../Icon'

export type HeaderLogoProps = Props<{ 
    svg: ReactComponentLike
}>

export type HeaderMenuProps = Props<{ 
    items: Array<Props<{
        active?: boolean
    }>>
}>

export type HeaderUtilitiesProps = Props<{ 
    items: Array<Props<{ 
        active?: boolean 
        text: string
        icon?: IconProps 
    }>>
}>

export type HeaderProps = Props<{
    logo: HeaderLogoProps
    menu: HeaderMenuProps
    utilities: HeaderUtilitiesProps
 }>

export const Header: Component<HeaderProps> = ({
    logo,
    menu,
    utilities,
    ...props
}) => {
    const { colors } = useTheme()

    return (
        <Element {...props} className={classes('header', props.className)}>
            <HeaderLogo {...logo} />
            <HeaderMenu {...menu} />
            <HeaderUtilities {...utilities} />

            <style jsx global>{`
                .header {
                    display: grid;
                    grid-gap: 1rem 2rem;
                    align-items: center;
                    font-size: 1.4rem;
                    grid-template-areas: "logo utilities"
                                        "navigation navigation";
                    grid-template-columns: auto;
                    grid-template-rows: auto;

                    @media (--medium-screen) {
                        grid-template-areas: "logo navigation utilities";
                        
                        & .header-menu {
                            text-align: center;
                        }
                    }
                }

                .header-menu__content > a,
                .header-utilities > a,
                .header-utilities .dropdown-label > a {
                    border-bottom: 0.1rem solid transparent;
                    color: ${colors.primary};
                    padding-top: 0.4rem;
                    padding-bottom: 0.3rem;
                    text-decoration: none;
                    transition: border 700ms ease;

                    &:hover, &.--active {
                        border-color: ${colors.primary};
                    }
                }

                .header .icon {
                    font-size: 2.4rem;
                }
             
            `}</style>
        </Element>
    )
}

const HeaderLogo: Component<HeaderLogoProps> = ({
    className,
    svg: Svg,
    ...props
}) => (
        <Element {...props} className={classes('header-logo', className)}>
            <Svg />
            <style jsx global>{`
                .header-logo {
                    align-items: center;
                    display: flex;
                    grid-area: logo;
                }

                .header-logo svg {
                    height: 3rem;
                }

                .header-logo a {
                    border: 0 none !important;
                    text-decoration: none !important;
                    color: inherit !important;
                }
            `}</style>
        </Element>
    )

const HeaderMenu: Component<HeaderMenuProps> = ({
    className,
    items = [],
    ...props
}) => {
    const { typography } = useTheme()

    return (
        <Element {...props} className={classes('header-menu', className)}>
            <div className="header-menu__content">
                {items.map(({active = false, ...item}, index) => (
                    <Element 
                        key={index} 
                        {...item} 
                        className={classes(['--active', active], item.className)}
                    />
                ))}
            </div>

            <style jsx global>{`
                .header-menu {
                    -webkit-overflow-scrolling: touch;
                    grid-area: navigation;
                    overflow-x: auto;
                }

                .header-menu::-webkit-scrollbar {
                    display: none;
                }

                .header-menu__content {
                    display: inline-grid;
                    font-family: ${typography.headingFamily};
                    font-weight: 600;
                    grid-auto-columns: max-content;
                    grid-auto-flow: column;
                    grid-gap: 2.5rem;
                    text-align: initial;
                    text-transform: uppercase;
                    white-space: nowrap;
                }
            `}</style>
        </Element>
    )
}

const HeaderUtilities: Component<HeaderUtilitiesProps> = ({
    className,
    items = [],
    ...props
}) => {    
    return (
        <Element {...props} className={classes('header-utilities', className)}>
            {items.map(({active = false, text, icon, ...item}, index) => (
                <Element 
                    {...item}
                    className={classes('header-utilities__item', item.className, ['--icon', !!icon], ['--active', active])}
                    key={index} 
                >
                   {icon ? (
                        <Icon className="header-utilities__item__icon" 
                            aria-label={text}
                            {...icon}
                        />
                    ) : text}
               </Element>
            ))}

            <style jsx global>{`
                .header-utilities {
                    align-items: center;
                    display: grid;
                    font-size: 1.3rem;
                    grid-area: utilities;
                    grid-auto-columns: max-content;
                    grid-auto-flow: column;
                    grid-gap: 2.5rem;
                    justify-content: flex-end;
                }

                .header-utilities__item {
                    &.--icon {
                        border-color: transparent !important;
                    }
                }

                .header-utilities__item__icon {
                    font-size: 2.4rem;
                }
            `}</style>
        </Element>
    )
}
