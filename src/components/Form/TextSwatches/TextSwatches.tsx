import React, { HTMLAttributes } from 'react'
import { Component } from '../../../lib'
import { Root, Item } from './TextSwatches.styled'

export type TextSwatchesProps = {
    name: string
    type?: 'radio' | 'checkbox'
    items: Array<
        {
            text: string
            disabled?: boolean
        } & HTMLAttributes<HTMLInputElement>
    >
}

export const TextSwatches: Component<TextSwatchesProps> = React.forwardRef(
    ({ name, type = 'radio', items = [], ...props }, ref) => {
        return (
            <Root {...props}>
                {items.map(({ text, ...item }, index) => (
                    <Item key={index}>
                        <input id={`swatch-group__${name}__${index}`} ref={ref} type={type} name={name} {...item} />
                        <label htmlFor={`swatch-group__${name}__${index}`}>{text}</label>
                    </Item>
                ))}
            </Root>
        )
    }
)
