import React from 'react'
import { Component, Props } from '../../../../lib'
import { Root, Overlay, Content, Button } from './Banner.styled'

import Link, { LinkProps } from '../../../Link'
import ButtonComponent, { ButtonProps as ButtonComponentProps } from '../../../Button'
import ContentWithBackground, { ContentWithBackgroundProps } from '../../lib/ContentWithBackground'

export type BannerProps = {
    appearance?: 'poster' | 'collage-left' | 'collage-center' | 'collage-right'
    background?: ContentWithBackgroundProps
    button?: ButtonComponentProps
    link?: LinkProps
    showButton?: 'always' | 'never' | 'hover'
    showOverlay?: 'always' | 'never' | 'hover'
    content?: Props<{
        html: string
    }>
    overlay: Props<{
        overlayColor?: string
    }>
}

export const Banner: Component<BannerProps> = ({
    appearance = 'poster',
    background,
    button,
    children,
    content,
    link,
    overlay,
    showButton,
    showOverlay,
    ...props
}) => {
    return (
        <Root
            as={link ? p => <Link {...link} {...p} /> : 'div'}
            $showButton={showButton}
            $showOverlay={showOverlay}
            $overlayColor={overlay && overlay.overlayColor}
            {...props}
        >
            <ContentWithBackground {...background}>
                <Overlay {...overlay}>
                    {content && <Content {...content} dangerouslySetInnerHTML={{ __html: content.html }} />}
                    {button && <Button as={ButtonComponent} {...button} />}
                </Overlay>
            </ContentWithBackground>
        </Root>
    )
}
