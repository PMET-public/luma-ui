import React from 'react'
import { Component } from '../../lib'
import { Root } from './Page.styled'

export type PageProps = {}

export const Page: Component<PageProps> = ({ children, ...props }) => {
    return <Root {...props}>{children}</Root>
}
