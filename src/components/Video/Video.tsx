import React from 'react'
import { Component } from '../../lib'
import { Root, Iframe } from './Video.styled'

export type VideoProps = {
    url: string
    width?: number
    height?: number
    fullWidth?: boolean
}

export const Video: Component<VideoProps> = ({ url, fullWidth, width, height, ...props }) => {
    return (
        <Root $fullWidth={fullWidth} {...props}>
            <Iframe
                width={width}
                height={height}
                src={url}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
            ></Iframe>
        </Root>
    )
}
