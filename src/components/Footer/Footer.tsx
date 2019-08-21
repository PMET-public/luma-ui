import React from 'react'
import { Component } from '../../lib'
import {
    Root,
    Menu,
    MenuLink,
    Copyright,
    Social,
    SocialIcon,
    SocialIconPinterest,
    SocialIconInstagram,
    SocialIconTwitter,
    SocialIconFacebook,
} from './Footer.styled'
import { StyledComponent } from 'styled-components'

export type FooterProps = {
    copyright: string
    menu?: StyledComponent<'a', { text: string }>[]
    social?: {
        facebook?: any
        instragram?: any
        pinterest?: any
        twitter?: any
    }
}

export const Footer: Component<FooterProps> = ({ copyright, menu, social, ...props }) => {
    return (
        <Root {...props}>
            {menu && (
                <Menu>
                    {menu.map(({ text, ...menuLink }, index) => (
                        <MenuLink key={index} {...menuLink}>
                            {text}
                        </MenuLink>
                    ))}
                </Menu>
            )}

            {social && (
                <Social>
                    {social.pinterest && (
                        <SocialIcon {...social.pinterest}>
                            <SocialIconPinterest />
                        </SocialIcon>
                    )}
                    {social.instragram && (
                        <SocialIcon {...social.instragram}>
                            <SocialIconInstagram />
                        </SocialIcon>
                    )}
                    {social.facebook && (
                        <SocialIcon {...social.facebook}>
                            <SocialIconFacebook />
                        </SocialIcon>
                    )}
                    {social.twitter && (
                        <SocialIcon {...social.twitter}>
                            <SocialIconTwitter />
                        </SocialIcon>
                    )}
                </Social>
            )}

            <Copyright>{copyright}</Copyright>
        </Root>
    )
}
