import React from 'react'
import { Component } from '../../lib'
import { Root } from './Loader.styled'

export type LoaderProps = {
    label: string
}

export const Loader: Component<LoaderProps> = ({ label, ...props }) => {
    return (
        <Root aria-label={label} {...props}>
            <span></span>
            <span></span>
            <span></span>
        </Root>
    )
}
