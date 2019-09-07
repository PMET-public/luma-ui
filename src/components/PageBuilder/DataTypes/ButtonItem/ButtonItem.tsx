import React from 'react'
import { Component } from '../../../../lib'
import { Root, ButtonLink } from './ButtonItem.styled'

import ButtonComponent, { ButtonProps as ButtonComponentProps } from '../../../Button'
import Link, { LinkProps } from '../../../Link'

export type ButtonItemProps = {
    button: ButtonComponentProps
    link: LinkProps
    type: 'button' | 'link'
}

export const ButtonItem: Component<ButtonItemProps> = ({ link, type, button, children, ...props }) => {
    return (
        <Root as={link ? Link : 'span'} {...link} {...props}>
            {type === 'button' ? <ButtonComponent as="span" {...button} /> : <ButtonLink>{button.text}</ButtonLink>}
        </Root>
    )
}
