import React from 'react'
import { Component } from '../../../../lib'
import { Root } from './Block.styled'

import HtmlComponent, { HtmlProps as HtmlComponentProps } from '../../../Html'

export type BlockProps = HtmlComponentProps

export const Block: Component<BlockProps> = ({ children, ...props }) => {
    return <Root as={HtmlComponent} {...props} />
}
