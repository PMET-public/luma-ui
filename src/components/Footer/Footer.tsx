import React from 'react'
import { Component, Props, Element } from '../../lib'
import defaultClasses from './Footer.css'

import IconTwitter from '@fortawesome/fontawesome-free/svgs/brands/twitter.svg'
import IconFacebook from '@fortawesome/fontawesome-free/svgs/brands/facebook.svg'
import IconInstagram from '@fortawesome/fontawesome-free/svgs/brands/instagram.svg'
import IconPinterest from '@fortawesome/fontawesome-free/svgs/brands/pinterest.svg'

export type FooterProps = Props<{
    classes?: typeof defaultClasses
    copyright: string
    menu?: Props[]
    social?: {
        facebook?: Props
        instragram?: Props
        pinterest?: Props
        twitter?: Props
    }
}>

export const Footer: Component<FooterProps> = ({
    classes,
    copyright,
    menu,
    social,
    ...props
}) => {
    const styles = { ...defaultClasses, ...classes }

    return (
        <Element {...props} className={styles.root}>
            {menu && (
                <div className={styles.menu}>
                    {menu.map(({ label, ...menuLink }, index) => (
                        <Element className={styles.menuLink}
                            {...menuLink}
                            key={index}
                        >
                            {label}
                        </Element>
                    ))}
                </div>
            )}

            {social && (
                <div className={styles.social}>
                    {social.pinterest && (
                        <Element 
                            {...social.pinterest} 
                            className={styles.socialIcon}
                        >
                            <IconPinterest />
                        </Element>
                    )}

                    {social.instragram && (
                        <Element 
                            {...social.instragram} 
                            className={styles.socialIcon}
                        >
                            <IconInstagram />
                        </Element>
                    )}

                    {social.facebook && (
                        <Element 
                            {...social.facebook} 
                            className={styles.socialIcon}
                        >
                            <IconFacebook />
                        </Element>
                    )}

                    {social.twitter && (
                        <Element 
                            {...social.twitter} 
                            className={styles.socialIcon}
                        >
                            <IconTwitter />
                        </Element>
                    )}

                </div>
            )}

            <div className={styles.copyright}>
                {copyright}
            </div>
        </Element>
    )
}
