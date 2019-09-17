import React from 'react'
import { Component } from '../../../../lib'
import { Root } from './Block.styled'

// import HtmlComponent, { HtmlProps as HtmlComponentProps } from '../../../Html'
import PageBuilder, { PageBuilderProps } from '../..'

export type BlockProps = PageBuilderProps

export const Block: Component<BlockProps> = ({ children, ...props }) => {
    return <Root as={PageBuilder} {...props} />
}
