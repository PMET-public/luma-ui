import React from 'react'
import { Component } from '../../../../lib'
import Html, { HtmlProps } from '../../../Html'
import { Root } from './Text.styled'

export type TextProps = HtmlProps

export const Text: Component<TextProps> = ({ children, ...props }) => {
    return <Root as={Html} {...props} />
}
