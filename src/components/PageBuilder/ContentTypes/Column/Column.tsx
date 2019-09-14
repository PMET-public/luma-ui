import React from 'react'
import { Component } from '../../../../lib'
import { Root } from './Column.styled'

import ContentWithBackground, { ContentWithBackgroundProps } from '../../lib/ContentWithBackground'

export type ColumnProps = {
    appearance?: string
    background?: ContentWithBackgroundProps
}

export const Column: Component<ColumnProps> = ({ appearance, background, children, style, ...props }) => {
    return (
        <Root as={ContentWithBackground} {...background} style={style} {...props}>
            {children}
        </Root>
    )
}
