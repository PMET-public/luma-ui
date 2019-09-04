import React from 'react'
import { Component } from '../../../../lib'
import { Root } from './Text.styled'

export type TextProps = {
    __html: string
}

export const Text: Component<TextProps> = ({ children, __html, ...props }) => {
    return <Root {...props} dangerouslySetInnerHTML={{ __html }} />
}
