import React from 'react'
import { Component } from '../../lib'
import { Root } from './Link.styled'

export type LinkProps = React.AnchorHTMLAttributes<HTMLElement>

export const Link: Component<LinkProps> = ({ ...props }) => {
    return <Root {...props} />
}
