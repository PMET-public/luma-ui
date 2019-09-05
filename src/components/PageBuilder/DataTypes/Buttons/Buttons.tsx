import React from 'react'
import { Component } from '../../../../lib'
import { Root } from './Buttons.styled'

export type ButtonsProps = {
    appearance?: 'stacked' | 'inline'
    sameWidth?: 'true' | 'false'
}

export const Buttons: Component<ButtonsProps> = ({ children, appearance = 'inline', sameWidth = false, ...props }) => {
    return (
        <Root $appearance={appearance} $sameWidth={sameWidth == 'true'} {...props}>
            {children}
        </Root>
    )
}
