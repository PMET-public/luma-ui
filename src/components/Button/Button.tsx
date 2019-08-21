import React from 'react'
import { Root } from './Button.styled'
import { Component } from '../../lib'

export type ButtonProps = {
    color?: 'primary' | 'secondary'
    fill?: boolean
    text?: string
}

export const Button: Component<ButtonProps> = ({
    text,
    children = text,
    color = 'primary',
    fill = false,
    ...props
}) => {
    return (
        <Root fill={fill} color={color} {...props}>
            <span>{children}</span>
        </Root>
    )
}
