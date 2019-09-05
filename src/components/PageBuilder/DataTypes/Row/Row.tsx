import React from 'react'
import { Component } from '../../../../lib'
import { Root, Wrapper, BgImage, Content } from './Row.styled'

import { Image, useImage } from '../../../../hooks/useImage'

export type RowProps = {
    appearance?: 'contained' | 'full-width' | 'full-bleed'
    backgroundImages?: Image
    innerHTML: string
    // enableParallax?: boolean
    // parallaxSpeed?: number
}

export const Row: Component<RowProps> = ({
    appearance = 'contained',
    backgroundImages,
    children,
    innerHTML,
    // enableParallax,
    // parallaxSpeed = 1,
    style,
    ...props
}) => {
    const bgImage = useImage(backgroundImages)

    return (
        <Root $appearance={appearance} {...props}>
            <Wrapper style={style}>
                {backgroundImages && <BgImage $src={bgImage.src} $loaded={bgImage.loaded} $error={bgImage.error} />}
                <Content>{children}</Content>
            </Wrapper>
        </Root>
    )
}
