import React from 'react'
import { Component } from '../../lib'
import { Root, Wrapper } from './Container.styled'

export type ContainerProps = {
    appearance?: 'contained' | 'full-width' | 'full-bleed'
}

export const Container: Component<ContainerProps> = ({ appearance = 'contained', children, ...props }) => {
    return (
        <Root {...props}>
            <Wrapper $contained={appearance !== 'full-bleed'}>{children}</Wrapper>
        </Root>
    )
}
