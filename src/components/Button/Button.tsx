import React from 'react'
import { Component, Props } from '../../lib'
import { Root } from './Button.styled'
import Loader, { LoaderProps } from '../Loader'

export type ButtonProps = Props<{
    secondary?: boolean
    text?: string
    loader?: LoaderProps
}>

export const Button: Component<ButtonProps> = ({ text, children = text, loader, secondary = false, ...props }) => {
    return (
        <Root $secondary={secondary} as="button" {...props} disabled={!!loader || props.disabled}>
            {!!loader ? <Loader as="span" {...loader} /> : <span>{children}</span>}
        </Root>
    )
}
