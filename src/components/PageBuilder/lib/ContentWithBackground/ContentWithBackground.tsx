import React, { useState, useEffect } from 'react'
import { Component } from '../../../../lib'
import { Root, BgImage, Content } from '../../lib/ContentWithBackground/ContentWithBackground.styled'

import { Image, useImage } from '../../../../hooks/useImage'

export type ContentWithBackgroundProps = {
    backgroundImages?: Image
}

export const ContentWithBackground: Component<ContentWithBackgroundProps> = ({
    backgroundImages,
    children,
    style: _style,
    ...props
}) => {
    const bgImage = useImage(backgroundImages)
    const [bgStyle, setBgStyle] = useState({})
    const [style, setStyle] = useState({})

    useEffect(() => {
        if (!_style) return

        const styleObj = {}
        const bgStyleObj = {}

        Object.keys(_style).forEach(s => {
            if (s.match(/^background(.*)$/)) bgStyleObj[s] = _style[s]
            else styleObj[s] = _style[s]
        })

        setStyle(styleObj)
        setBgStyle(bgStyleObj)
    }, [JSON.stringify(_style)])

    return (
        <Root style={style} {...props}>
            {backgroundImages && (
                <BgImage $src={bgImage.src} $loaded={bgImage.loaded} $error={bgImage.error} style={bgStyle} />
            )}
            <Content>{children}</Content>
        </Root>
    )
}
