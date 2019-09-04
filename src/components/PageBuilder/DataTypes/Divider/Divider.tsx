import React from 'react'
import { Component } from '../../../../lib'
import { Root, Line } from './Divider.styled'

export type DividerProps = {
    line: React.HTMLAttributes<HTMLElement>
}

export const Divider: Component<DividerProps> = ({ children, line, ...props }) => {
    console.log({ line })
    return (
        <Root {...props}>
            <Line {...line} />
        </Root>
    )
}
