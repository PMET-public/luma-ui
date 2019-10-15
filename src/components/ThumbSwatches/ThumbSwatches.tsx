import React from 'react'
import { Component, Props } from '../../lib'
import { Root, Item } from './ThumbSwatches.styled'

import Image, { ImageProps } from '../Image'

export type ThumbSwatchesProps = {
    groupId: string
    items: Array<
        Props<{
            image: ImageProps
        }>
    >
}

export const ThumbSwatches: Component<ThumbSwatchesProps> = React.forwardRef(
    ({ groupId, items = [], ...props }, ref) => {
        return (
            <Root {...props}>
                {items.map(({ image, ...item }, index) => (
                    <Item key={index}>
                        <input
                            id={`swatch-group__${groupId}__${index}`}
                            ref={ref}
                            type="radio"
                            name={groupId}
                            {...item}
                        />
                        <label htmlFor={`swatch-group__${groupId}__${index}`}>
                            <Image transition width={4} height={5} {...image} />
                        </label>
                    </Item>
                ))}
            </Root>
        )
    }
)
