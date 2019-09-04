import React from 'react'
import { Component } from '../../../../lib'
import { Root } from './Buttons.styled'

export type ButtonsProps = {}

export const Buttons: Component<ButtonsProps> = ({ children, ...props }) => {
    return <Root {...props}>{children}</Root>
}
