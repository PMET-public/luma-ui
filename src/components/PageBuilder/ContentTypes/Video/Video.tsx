import React from 'react'
import { Component } from '../../../../lib'
import { Root } from './Video.styled'

export type VideoProps = {
    url: string
}

export const Video: Component<VideoProps> = ({ children, url, ...props }) => {
    return (
        <Root {...props}>
            <iframe
                src={url}
                height={360}
                width={640}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                frameBorder={0}
            />
        </Root>
    )
}
