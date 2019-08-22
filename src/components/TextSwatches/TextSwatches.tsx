import React from 'react'
import { Component } from '../../lib'
import { Root, Item, Label } from './TextSwatches.styled'

export type TextSwatchesProps = {
    items: Array<{
        active?: boolean
        disabled?: boolean
        text: string
    }>
}

export const TextSwatches: Component<TextSwatchesProps> = ({ items = [], ...props }) => {
    return (
        <Root {...props}>
            {items.map(({ active = false, disabled = false, text, ...item }, index) => (
                <Item as="button" active={active} disabled={disabled} key={index} {...item}>
                    <Label>{text}</Label>
                </Item>
            ))}
        </Root>
    )
}
