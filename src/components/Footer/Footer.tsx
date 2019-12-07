import React from 'react'
import { Component } from '../../lib'
import { Root } from './Footer.styled'
import { FooterSkeleton } from './Footer.skeleton'

export type FooterProps = {
    loading?: boolean
    html: JSX.Element
}

export const Footer: Component<FooterProps> = ({ loading, html, ...props }) => {
    return <Root {...props}>{loading ? <FooterSkeleton /> : html}</Root>
}
