import React from 'react'
import { Component } from '../../../../lib'
import { Root, Wrapper } from './Row.styled'
import ContentWithBackground, { ContentWithBackgroundProps } from '../../lib/ContentWithBackground'

export type RowProps = {
    appearance?: 'contained' | 'full-width' | 'full-bleed'
    background?: ContentWithBackgroundProps
    // enableParallax?: boolean
    // parallaxSpeed?: number
}

export const Row: Component<RowProps> = ({
    appearance = 'contained',
    background,
    children,
    // enableParallax,
    // parallaxSpeed = 1,
    style,
    ...props
}) => {
    const isContained = appearance === 'contained' || appearance === 'full-width'

    return (
        <Root {...props}>
            <ContentWithBackground {...background} style={style}>
                <Wrapper $contained={isContained} $margin={isContained}>
                    {children}
                </Wrapper>
            </ContentWithBackground>
        </Root>
    )
}
