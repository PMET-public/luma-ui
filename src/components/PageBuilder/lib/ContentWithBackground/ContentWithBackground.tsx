import React, { useMemo, useContext } from 'react'
import { Component, Props } from '../../../../lib'
import { Root, BgImage, Content } from '../../lib/ContentWithBackground/ContentWithBackground.styled'

import { Image, useImage } from '../../../../hooks/useImage'
import { ThemeContext } from 'styled-components'
import { useResize } from '../../../../hooks/useResize'

export type ContentWithBackgroundProps = Props<{
    backgroundImages?: Image
    fullScxreen?: boolean
}>

export const ContentWithBackground: Component<ContentWithBackgroundProps> = ({
    backgroundImages,
    fullScreen,
    children,
    style,
    ...props
}) => {
    const bgImage = useImage(backgroundImages)

    const { colors } = useContext(ThemeContext)

    const { vHeight } = useResize()

    const styles: { [key: string]: any } = useMemo(() => {
        if (!style) return {}

        const background = {}
        const wrapper = {}

        Object.keys(style).forEach(s => {
            if (s.match(/^background(.*)$/)) background[s] = style[s]
            else wrapper[s] = style[s]
        })

        return {
            background,
            wrapper,
        }
    }, [JSON.stringify(style)])

    return (
        <Root
            $height={fullScreen ? vHeight : undefined}
            $backgroundColor={styles.background.backgroundColor || bgImage.src ? colors.onSurface5 : 'transparent'}
            style={styles.wrapper}
            {...props}
        >
            {bgImage.src && (
                <BgImage $src={bgImage.src} $loaded={bgImage.loaded} $error={bgImage.error} style={styles.background} />
            )}
            <Content>{children}</Content>
        </Root>
    )
}
