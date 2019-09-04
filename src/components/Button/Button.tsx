import React from 'react'
import { Component } from '../../lib'
import { Root } from './Button.styled'

export type ButtonProps = {
    color?: 'primary' | 'secondary'
    fill?: boolean
    text?: string
}

export const Button: Component<ButtonProps> = ({ text, children, color = 'primary', fill = false, ...props }) => {
    return (
        <Root $fill={fill} $color={color} as="button" {...props}>
            <span>{text || children}</span>
        </Root>
    )
}
