import React from 'react'
import { Component } from '../../lib'
import { Root } from './Button.styled'

export type ButtonProps = {
    color?: 'primary' | 'secondary'
    fill?: boolean
    border?: boolean
    text?: string
}

export const Button: Component<ButtonProps> = ({
    text,
    children,
    color = 'primary',
    border = true,
    fill = false,
    ...props
}) => {
    return (
        <Root $fill={fill} $border={border} $color={color} as="button" {...props}>
            <span>{text || children}</span>
        </Root>
    )
}
