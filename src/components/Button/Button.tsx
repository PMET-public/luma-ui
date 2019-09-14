import React from 'react'
import { Component } from '../../lib'
import { Root } from './Button.styled'

export type ButtonProps = {
    secondary?: boolean
    text?: string
}

export const Button: Component<ButtonProps> = ({ text, children, secondary = false, ...props }) => {
    return (
        <Root $secondary={secondary} as="button" {...props}>
            <span>{text || children}</span>
        </Root>
    )
}
