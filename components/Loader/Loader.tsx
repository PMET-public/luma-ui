import React from 'react'
import { Component } from '../../lib'
import { Root } from './Loader.styled'

export type LoaderProps = {}

export const Loader: Component<LoaderProps> = ({ ...props }) => {
    return (
        <Root {...props}>
            <span />
            <span />
            <span />
        </Root>
    )
}
