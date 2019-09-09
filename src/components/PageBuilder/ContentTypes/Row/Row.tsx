import React from 'react'
import { Component } from '../../../../lib'
import { Root } from './Row.styled'
import ContentWithBackground from '../../lib/ContentWithBackground'

import { Image } from '../../../../hooks/useImage'

export type RowProps = {
    appearance?: 'contained' | 'full-width' | 'full-bleed'
    backgroundImages?: Image
    // enableParallax?: boolean
    // parallaxSpeed?: number
}

export const Row: Component<RowProps> = ({
    appearance = 'contained',
    backgroundImages,
    children,
    // enableParallax,
    // parallaxSpeed = 1,
    style,
    ...props
}) => {
    return (
        <Root $appearance={appearance} {...props}>
            <ContentWithBackground backgroundImages={backgroundImages} style={style}>
                {children}
            </ContentWithBackground>
        </Root>
    )
}
