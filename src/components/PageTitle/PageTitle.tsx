import React from 'react'
import { Component } from '../../lib'
import { Root } from './PageTitle.styled'

export type PageTitleProps = {}

export const PageTitle: Component<PageTitleProps> = ({ children, ...props }) => {
    return <Root {...props}>{children}</Root>
}
