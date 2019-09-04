import React from 'react'
import { Component } from '../../../../lib'
import { Root } from './Html.styled'

import HtmlComponent, { HtmlProps as HtmlComponentProps } from '../../../Html'

export type HtmlProps = HtmlComponentProps

export const Html: Component<HtmlProps> = ({ children, ...props }) => {
    return <Root as={HtmlComponent} {...props} />
}
