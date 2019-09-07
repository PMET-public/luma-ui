import React from 'react'
import { Component } from '../../../../lib'
import { Root } from './Column.styled'

import { Image } from '../../../../hooks/useImage'

import ContentWithBackground from '../../lib/ContentWithBackground'

export type ColumnProps = {
    appearance?: string
    backgroundImages?: Image
}

export const Column: Component<ColumnProps> = ({ appearance, backgroundImages, children, style, ...props }) => {
    return (
        <Root as={ContentWithBackground} backgroundImages={backgroundImages} style={style} {...props}>
            {children}
        </Root>
    )
}
