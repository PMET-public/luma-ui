import React from 'react'
import { Component, Props, Element } from '../../lib'
import styles from './Footer.css'

import IconTwitter from '@fortawesome/fontawesome-free/svgs/brands/twitter.svg'
import IconFacebook from '@fortawesome/fontawesome-free/svgs/brands/facebook.svg'
import IconInstagram from '@fortawesome/fontawesome-free/svgs/brands/instagram.svg'
import IconPinterest from '@fortawesome/fontawesome-free/svgs/brands/pinterest.svg'

export type FooterProps = Props<{
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
    copyright,
    menu,
    social,
    ...props
}) => {

    return (
        <Element className={styles.root} {...props}>
            {menu && (
                <div className={styles.menu}>
                    {menu.map(({ label, ...menuLink }, index) => (
                        <Element 
                            className={styles.menuLink}
                            key={index}
                            {...menuLink}
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
                            className={styles.socialIcon}
                            {...social.pinterest} 
                        >
                            <IconPinterest />
                        </Element>
                    )}

                    {social.instragram && (
                        <Element 
                            className={styles.socialIcon}
                            {...social.instragram} 
                        >
                            <IconInstagram />
                        </Element>
                    )}

                    {social.facebook && (
                        <Element 
                            className={styles.socialIcon}
                            {...social.facebook} 
                        >
                            <IconFacebook />
                        </Element>
                    )}

                    {social.twitter && (
                        <Element 
                            className={styles.socialIcon}
                            {...social.twitter} 
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
