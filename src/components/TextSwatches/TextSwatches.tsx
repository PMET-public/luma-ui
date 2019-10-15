import React from 'react'
import { Component, Props } from '../../lib'
import { Root, Item } from './TextSwatches.styled'

export type TextSwatchesProps = {
    groupId: string
    items: Array<
        Props<{
            text: string
        }>
    >
}

export const TextSwatches: Component<TextSwatchesProps> = React.forwardRef(({ groupId, items = [], ...props }, ref) => {
    return (
        <Root {...props}>
            {items.map(({ text, ...item }, index) => (
                <Item key={index}>
                    <input id={`swatch-group__${groupId}__${index}`} ref={ref} type="radio" name={groupId} {...item} />
                    <label htmlFor={`swatch-group__${groupId}__${index}`}>{text}</label>
                </Item>
            ))}
        </Root>
    )
})
