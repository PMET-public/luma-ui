import React from 'react'
import { Component } from '../../../../lib'
import { Root } from './Video.styled'

export type VideoProps = {}

export const Video: Component<VideoProps> = ({ children, ...props }) => {
    return <Root {...props} />
}
