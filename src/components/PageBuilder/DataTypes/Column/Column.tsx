import React from 'react'
import { Component } from '../../../../lib'
import { Root, Wrapper, BgImage, Content } from './Column.styled'

import { Image, useImage } from '../../../../hooks/useImage'

export type ColumnProps = {
    appearance?: 'contained' | 'full-width' | 'full-bleed'
    backgroundImages?: Image
    innerHTML: string
    // enableParallax?: boolean
    // parallaxSpeed?: number
}

export const Column: Component<ColumnProps> = ({
    appearance = 'contained',
    backgroundImages,
    children,
    innerHTML,
    // enableParallax,
    // parallaxSpeed = 1,
    ...props
}) => {
    const bgImage = useImage(backgroundImages)
    return (
        <Root $appearance={appearance} {...props}>
            <Wrapper>
                {backgroundImages && <BgImage $src={bgImage.src} $loaded={bgImage.loaded} $error={bgImage.error} />}
                <Content>{children}</Content>
            </Wrapper>
        </Root>
    )
}
