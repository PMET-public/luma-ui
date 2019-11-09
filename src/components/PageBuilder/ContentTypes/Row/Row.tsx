import React from 'react'
import { Component } from '../../../../lib'
import { Root, Wrapper } from './Row.styled'
import ContentWithBackground, { ContentWithBackgroundProps } from '../../lib/ContentWithBackground'

export type RowProps = {
    appearance?: 'contained' | 'full-width' | 'full-bleed' | 'full-screen'
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
    style: _style,
    ...props
}) => {
    const contained = appearance === 'contained' || appearance === 'full-width'
    const fullScreen = appearance === 'full-screen'

    const style = { ..._style }

    if (fullScreen) _style.minHeight = `calc(100vh - 5rem)`

    return (
        <Root {...props}>
            <ContentWithBackground {...background} style={style}>
                <Wrapper $contained={contained} $margin={contained}>
                    {children}
                </Wrapper>
            </ContentWithBackground>
        </Root>
    )
}
