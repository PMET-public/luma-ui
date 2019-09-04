import React from 'react'
import { Component } from '../../../../lib'
import { Root } from './ButtonItem.styled'

import ButtonComponent, { ButtonProps as ButtonComponentProps } from '../../../Button'
import Link, { LinkProps } from '../../../Link'

export type ButtonItemProps = {
    button: ButtonComponentProps
    link: LinkProps
}

export const ButtonItem: Component<ButtonItemProps> = ({ link, button, children, ...props }) => {
    return (
        <Root as={link ? Link : 'span'} {...link} {...props}>
            <ButtonComponent as="span" {...button} />
        </Root>
    )
}
