import React from 'react'
import { Component } from '../../lib'
import { Root } from './Html.styled'

export type HtmlProps = {
    source: string
}

export const Html: Component<HtmlProps> = ({ source, ...props }) => {
    return source ? <Root {...props} dangerouslySetInnerHTML={{ __html: source }} /> : null
}
