import React from 'react'
import { Component, Props } from '../../lib'
import { Root, Item, Label } from './TextSwatches.styled'

export type TextSwatchesProps = {
    items: Array<
        Props<{
            active?: boolean
            disabled?: boolean
            text: string
        }>
    >
}

export const TextSwatches: Component<TextSwatchesProps> = ({ items = [], ...props }) => {
    return (
        <Root {...props}>
            {items.map(({ active = false, disabled = false, text, ...item }, index) => (
                <Item $active={active} as="button" disabled={disabled} key={index} {...item}>
                    <Label>{text}</Label>
                </Item>
            ))}
        </Root>
    )
}
