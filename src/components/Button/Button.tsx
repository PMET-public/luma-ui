import React, { FunctionComponent } from 'react'
import { Root } from './Button.styled'

export type ButtonProps = {
    color?: 'primary' | 'secondary'
    fill?: boolean
    text?: string
}

export const Button: FunctionComponent<ButtonProps> = ({
    text,
    children = text,
    color = 'primary',
    fill = false,
    ...props
}) => {
    return (
        <Root $fill={fill} $color={color} {...props}>
            <span>{children}</span>
        </Root>
    )
}
