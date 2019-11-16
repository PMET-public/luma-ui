import React from 'react'
import { Component } from '../../lib'
import { Root } from './Footer.styled'

export type FooterProps = {}

export const Footer: Component<FooterProps> = ({ children, ...props }) => {
    return <Root {...props}>{children}</Root>
}
